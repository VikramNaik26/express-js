const express = require("express");
const app = express();

const authorize = require("./authorize");

// 1. use vs route
// 2. options - our own / express / third party

// express middleware
// app.use(express.static("./public"));

// third party middleware
// npm i morgan

const logger = (req, res, next) => {
  const method = req.method;
  const url = req.url;
  const time = new Date().getTime();

  console.log(method, url, time);
  next();
};

app.use([authorize, logger]);
// order matters

app.get("/", (req, res) => {
  res.send("home");
});

app.get("/about", (req, res) => {
  res.send("About");
});

app.get("/api/products", (req, res) => {
  res.send("products");
});

app.get("/api/items", (req, res) => {
  res.send("items");
});

app.listen(5000, () => {
  console.log("server listening on port 5000....");
});
