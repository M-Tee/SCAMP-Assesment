const Product = require('../Models/productModel');

const getProducts = (req, res) => {
  Product.find((err, products) => {
    if (err) {
      return res.sendStatus(404);
    }
    return res.json(products)
  });
};

const addProduct = (req, res) => {
  const product = new Product(req.body);

  product.save((err) => {
    if (err) {
      return res.sendStatus(404);
    }
    return res.json(product);
  })
};

const findProduct = (req, res, next) => {
  Product.findById(req.params.productId, (err, product) => {
    if (err) {
      return res.send(err);
    }
    if (product) {
      req.product = product;
      return next();
    }
    return res.sendStatus(404);
  })
};

const getProduct = (req, res) => res.json(req.product);

const replaceProduct = (req, res) => {
  const { product } = req;

  product.productName = req.body.productName;
  product.description = req.body.description;
  product.cost = req.body.cost;
  product.inStock = req.body.inStock;

  product.save((err) => {
    if (err) {
      return res.sendStatus(404);
    }
    return res.json(product);
  })
};

const updateProduct = (req, res) => {
  const { product } = req;

  if (req.body._id) {
    delete req.body._id;
  }

  Object.entries(req.body).forEach((item) => {
    const key = item[0];
    const value = item[1];
    product[key] = value;
  })

  req.product.save((err) => {
    if (err) {
      return res.sendStatus(404);
    }
    return res.json(product);
  })
};

const deleteProduct = (req, res) => {
  req.product.remove((err) => {
    if (err) {
      return res.send(err);
    }
    return res.sendStatus(204);
  })
};

module.exports = {
  getProducts,
  addProduct,
  findProduct,
  getProduct,
  replaceProduct,
  updateProduct,
  deleteProduct
}