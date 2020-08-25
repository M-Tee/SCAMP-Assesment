const express = require(`express`);
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const morgan = require('morgan');

const app = express();
const port = process.env.PORT || 8000;
const db = mongoose.connect('mongodb://localhost/inventory');

const prodrouter = require('./routes/productRoutes');
const userRouter = require('./routes/userRoutes');

app
.use(morgan('dev'))
.use(bodyParser.urlencoded({ extended: true }))
.use(bodyParser.json())
.use(prodrouter)
.use(userRouter)

.listen(port, () => {
  console.log(`listening on Port ${port}`);
});
