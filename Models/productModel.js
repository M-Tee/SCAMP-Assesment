const mongoose = require('mongoose');

const {Schema} = mongoose;

const productModel = new Schema(
  {
    productName: { type: String},
    description: { type: String},
    cost: { type: Number},
    inStock: {type: Boolean, default:true }
  }
);

module.exports = mongoose.model('Product', productModel);

