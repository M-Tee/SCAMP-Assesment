require('dotenv').config()
const express = require(`express`);
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const morgan = require('morgan');


const app = express();
const port = process.env.PORT || 8000;
const mongoDB = process.env.MONGODB_URI
const prodrouter = require('./routes/productRoutes');
const userRouter = require('./routes/userRoutes');

// const db = mongoose.connect('mongodb://localhost/inventory');
mongoose
  .connect(mongoDB || 'mongodb://localhost/inventory', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));


app
  .use(morgan('dev'))
  .use(bodyParser.urlencoded({ extended: true }))
  .use(bodyParser.json())
  .use(prodrouter)
  .use(userRouter)

  .listen(port, () => {
    console.log(`listening on Port ${port}`);
  });
