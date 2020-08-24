const express = require(`express`);
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const morgan = require('morgan');

const app = express();
const port = 8000;
const db = mongoose.connect('mongodb://localhost/inventory');

const prodrouter = require('./routes/productRoutes');
const userRouter = require('./routes/userRoutes');

app.use(morgan('dev'));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


app.use(prodrouter);
app.use(userRouter);



app.listen(port, () => {
  console.log(`listening on Port ${port}`);
});
