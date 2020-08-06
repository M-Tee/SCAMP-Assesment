const express = require(`express`);

const app = express();
const port = 8000;
const router = express.Router();



app.use('/shoppingmart', router);

app.listen(port, () => {
  console.log(`listening on Port ${port}`);
});
