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

    router.route('/users/:userId')
    .delete((req, res) => {
      User.findById(req.params.userId, (err, user) => {
        if (err) {
          return res.send(err);
        }
        user.remove((err) => {
          if (err) {
            return res.send(err);
          }
          return res.sendStatus(204);
        })
      })

    });

  router.route('/users/login')
    .post((req, res) => {
      User.findOne({ email: req.body.email }, async (err, user) => {
        if (err) {
          return res.send(err);
        }
        if (await bcrypt.compare(req.body.password, user.password)) {
          return res.send('Login sucessful')
        }
        return res.send('Wrong Password');
      })
    })

  return router;
}

module.exports = userRoutes;