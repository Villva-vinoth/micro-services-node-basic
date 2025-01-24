const express = require("express");
const baseRouter = require("./api/routers/base.router");
const { initialize } = require("./model/index");
require("dotenv").config();
const app = express();

const port = process.env.PORT || 4002;

app.use(express.json());

initialize();

app.get("/", (req, res) => {
  res.send("Hello from Microservice 2");
});
app.use("/api", baseRouter); 
app.listen(port, () => {
  console.log(`app listening on port ${port}!`);
});
