const express = require(`express`);
const userController = require('../controllers/userController');
const auth = require('../middleware/auth')

const router = express.Router();

router.route('/users/login')
  .post(userController.userLogin);

router.route('/users')
  .get(auth.verifyToken, userController.getUsers)
  .post(userController.postUser);

router.use('/users/:userId', userController.findUser);

router.route('/users/:userId')
  .get(userController.getUser)
  .patch(userController.updateUser)
  .delete(userController.deleteUser);
module.exports = router