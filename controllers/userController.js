const User = require('../Models/userModel');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const config = require('../config/config');

const getUsers = (req, res) => {
  let token = req.headers['x-access-token'];
  if(!token){
    return res.status(401).send({auth: false, message:'no token provided'});
  }
  jwt.verify(token, config.secret, function(err, users) {
    if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
    
    User.find((err, users) => {
        if (err) {
          return res.sendStatus(404);
        }
        return res.json(users)
      });
  });


  // User.find((err, users) => {
  //   if (err) {
  //     return res.sendStatus(404);
  //   }
  //   return res.json(users)
  // });

}
const postUser = async (req, res) => {
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
}

const deleteUser = (req, res) => {
  User.findById(req.params.userId, (err, user) => {
    if (err) {
      return res.send(err);
    }
    user.remove((err) => {
      if (err) {
        return res.status(500).send(err);
      }
      return res.sendStatus(204);
    })
  })

}
const userLogin = (req, res) => {
  User.findOne({ email: req.body.email }, async (err, user) => {
    if (err) {
      return res.send(err);
    }
    if(!user){
      return res.sendStatus(404);
    }

    if (await bcrypt.compare(req.body.password, user.password)) {

      const token = jwt.sign({ id: user._id }, config.secret, {
        expiresIn: 86400 
      });

      // token = await res.json()
      // localStorage.setItem('token', token);
      res.status(200).send({ auth: true, token: token });

      // return res.json({token});
      // return res.send(localStorage.getItem("token));
      // return res.send(`Welcome back   ${user.firstName}`)
    }
    return res.status(401).send('Wrong Password');
  })
}

module.exports = {
  getUsers,
  postUser,
  deleteUser,
  userLogin
}