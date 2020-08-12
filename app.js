const express = require(`express`);
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
const port = 8000;
const db = mongoose.connect('mongodb://localhost/inventory');

const router = require('./routes/productRoutes');

const userRouter = require('./routes/userRoutes');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


app.use('/shoppingmart', router);
app.use(userRouter);

app.listen(port, () => {
  console.log(`listening on Port ${port}`);
});
