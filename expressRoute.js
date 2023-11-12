const express = require("express");
const app = express();
/* let { people } = require("./data"); */
// const morgan = require("morgan");

const people = require("./routes/people");
const auth = require("./routes/auth");

// static assets
app.use(express.static("./methods-public"));
// inbuilt express middleware
// parse form data
app.use(express.urlencoded({ extended: false }));

app.use(express.json());

app.use("/api/people", people);
app.use("/login", auth);

app.listen(5000, () => {
  console.log("server listening on port 5000...");
});
