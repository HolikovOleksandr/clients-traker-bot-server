require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");

const app = express();
const port = process.env.PORT;

//====R=O=U=T=E=S====

app.get("/", (req, res) => {
  res.send("Hello Node API");
});

app.post("/client", (req, res) => {
  console.log(req.body);
  res.send(req.body);
});

//===================

async function start() {
  app.listen(port, () => {
    console.log("API runningn on port", port);
  });
}

mongoose
  .connect(process.env.MONGODB_STRING)
  .then(() => {
    console.log("Connected to database");
    start();
  })
  .catch((error) => {
    console.error(error);
  });
