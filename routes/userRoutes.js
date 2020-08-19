const express = require(`express`);
const userController = require('../controllers/userController');
const auth = require('../middleware/auth')

const router = express.Router();

router.route('/users')
  .get(auth.verifyToken, userController.getUsers)
  .post(userController.postUser);

router.route('/users/:userId')
  .delete(userController.deleteUser);

router.route('/users/login')
  .post(userController.userLogin);

module.exports = router