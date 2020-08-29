const express = require(`express`);
const prodController = require('../controllers/prodController');
const router = express.Router();

router.route('/products')
  .get(prodController.getProducts)
  .post(prodController.addProduct);

router.use('/products/:productId', prodController.findProduct)

router.route('/products/:productId')
  .get(prodController.getProduct)
  .put(prodController.replaceProduct)
  .patch(prodController.updateProduct)
  .delete(prodController.deleteProduct);

module.exports = router;