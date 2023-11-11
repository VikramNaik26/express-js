const express = require("express");
const path = require("path");

const app = express();

// setup static and middlewares
app.use(express.static(path.join("./navbar-app")));

/* app.get("/about", (req, res) => {
  res.send("About Page");
}); */

/* app.get("/", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./navbar-app/index.html"));
}); */

// adding to static assets
// SSR

app.all("*", (req, res) => {
  res.status(404).send("Page not found");
});

app.listen(5000, () => {
  console.log("server listening on port 5000...");
});
