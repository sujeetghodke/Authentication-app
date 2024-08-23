const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const AuthRouter = require("./Routes/AuthRouter");
const ProductRouter = require("./Routes/ProductRouter");

require("dotenv").config();
require("./Models/db");
const port = process.env.PORT || 8081;

app.get("/hello", (req, res) => {
  res.send("world");
});

app.use(bodyParser.json());
app.use(cors());
app.use("/auth", AuthRouter);
app.use("/products", ProductRouter);

app.listen(port, () => {
  console.log(`Server is running on port : ${port}`);
});
