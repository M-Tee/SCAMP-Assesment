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
            return res.sendStatus(404);
          }
          return res.json(user);
        })
      } catch {
        res.status(500).send()
      }
    });

  return router;
}

module.exports = userRoutes;