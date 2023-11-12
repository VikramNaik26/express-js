const express = require("express");
const app = express();

// req => middleware => res

const logger = (req, res, next) => {
  // by default express will send the parameters req, re, and next
  const method = req.method;
  const url = req.url;
  const time = new Date().getFullYear();
  console.log(method, url, time);
  next();
};
// logger.js can be imported to improve readability

/* app.get("/", (req, res) => {
  const method = req.method;
  const url = req.url;
  const time = new Date().getFullYear();
  console.log(method, url, time);
  res.send("Home");
}); */

app.get("/", logger, (req, res) => {
  res.send("Home");
});

app.get("/about", logger, (req, res) => {
  res.send("About");
});

app.listen(5000, () => {
  console.log("server listening on port 5000....");
});
