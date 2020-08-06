const express = require(`express`);
const mongoose = require('mongoose');

const app = express();
const port = 8000;
const router = express.Router();
const db = mongoose.connect('mongodb://localhost/inventory');



app.use('/shoppingmart', router);

app.listen(port, () => {
  console.log(`listening on Port ${port}`);
});
