const mongoose = require('mongoose');

const { Schema } = mongoose;

const userModel = new Schema(
  {
    firstName: {
      type: String,
      required: true
    },
    lastName: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true,
      unique: true
    },
    password: {
      type: String,
      required: true
    },
    role: {
      type: String,
      default: 'basic',
      enum: ["basic", "admin"]
    },
    token: {
      type: String
    }
  }
);

module.exports = mongoose.model('User', userModel);
