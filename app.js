const express = require(`express`);
const mongoose = require('mongoose');

const app = express();
const port = 8000;
const router = express.Router();
const db = mongoose.connect('mongodb://localhost/inventory');
const Product = require('./Models/productModel');


router.route('/products')
.get((req, res) => {
  Product.find((err, products) => {
    if (err) {
     return res.sendStatus(404);
    }
    return res.json(products)
  });
})
.post();

app.use('/shoppingmart', router);

app.listen(port, () => {
  console.log(`listening on Port ${port}`);
});
