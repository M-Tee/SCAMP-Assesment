const jwt = require('jsonwebtoken');
require('dotenv').config();
const secret = process.env.SECRET

const verifyToken = (req, res, next) => {
  let token = req.headers['x-access-token']

  if(!token){
    return res.status(401).send('no token provided')
  }
  jwt.verify(token, secret, (err, userData) => {
    if(err) {
      return res.status(403).send('Failed to authenticate token.')
    }
    if(userData){
      return next()
    }
    return res.sendStatus(500)
  })
}

module.exports = {
  verifyToken
}