const express = require(`express`);
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
const port = 8000;
const router = express.Router();
const db = mongoose.connect('mongodb://localhost/inventory');
const Product = require('./Models/productModel');

app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());

router.route('/products')
.get((req, res) => {
  Product.find((err, products) => {
    if (err) {
     return res.sendStatus(404);
    }
    return res.json(products)
  });
})
.post((req, res) => {
  const product = new Product(req.body);

  product.save((err) => {
    if(err) {
      return res.sendStatus(404);
    }
    return res.json(product);
  })
});

router.use('/products/:productId', (req, res, next) => {
  Product.findById(req.params.productId, (err, product) =>{
    if (err) {
      return res.send(err);
    }
    if(product) {
      req.product = product;
      return next();
    }
    return res.sendStatus(404);
  })
})

router.route('/products/:productId')
.get((req, res) => res.json(req.product));

app.use('/shoppingmart', router);

app.listen(port, () => {
  console.log(`listening on Port ${port}`);
});
