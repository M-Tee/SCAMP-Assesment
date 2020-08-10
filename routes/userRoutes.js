const express = require(`express`);
const bcrypt = require('bcrypt');

function userRoutes(User) {
  const router = express.Router();

  router.route('/users')
    .get((req, res) => {
      User.find((err, users) => {
        if (err) {
          return res.sendStatus(404);
        }
        return res.json(users)
      });
    })
    .post(async (req, res) => {
      try {
        const salt = await bcrypt.genSalt();
        req.body.password = await bcrypt.hash(req.body.password, salt)

        const user = new User(req.body);

        user.save((err) => {
          if (err) {
            return res.send(err);
          }
          return res.json(user);
        })
      } catch {
        res.status(400).send()
      }
    });

  router.route('/users/login')
    .post(async (req, res) => {
      User.findOne({ email: req.body.email }, (err, user) => {
        if (err) {
          return res.send(err);
        }
        return user
      })
      await bcyrpt.compare(req.body.password, user.password, (err, res) => {
        if(err) {
          res.send(err)
        }
        if (req.body.password != user.password) {
          res.json({ success: false, message: 'passwords do not match' });
        } else {
          res.send('Log in Sucessfull')
        }
      });
     
      // try {
      //   await bcyrpt.compare(req.body.password, user.password)
      //   if(true){
      //     res.send('Log in Sucessfull')
      //   } else {
      //     res.send('Incorrect Password')
      //   }
      // } catch {
      //   res.status(400).send()
      // }

      // const user = User.find(user => User.email = req.body.email)
      // if (user == null) {
      //   return res.status(400).send('User not found')
      // }
      // try {
      //   if (await bcyrpt.compare(req.body.password, user.password)) {
      //     res.send('Log in Sucessfull')
      //   } else {
      //     res.send('Incorrect Password')
      //   }
      // } catch {
      //   res.status(400).send()
      // }

    })

    return router;
  }

module.exports = userRoutes;