const express = require("express");

const app = express();

// const app = require('express')();
// another way of creating express

// app.get
// app.post
// app.put
// app.delete
// app.all
// app.use
// app.listen

app.get("/", (req, res) => {
  res.status(200).send("Welcome");
});

app.get("/about", (req, res) => {
  res.status(200).send("About");
});

app.all("*", (req, res) => {
  res.status(404).send("resource not found");
});

app.listen(5000, () => {
  console.log("server has been listening on port 5000");
});
