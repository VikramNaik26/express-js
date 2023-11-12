const express = require("express");
const router = express.Router();

router.post("/", (req, res) => {
  const { name } = req.body;
  //   console.log(req.body);
  if (name) {
    res.status(200).send(`Welcome ${name}`);
  }
  res.status(401).send("Please provide creadentials");
  //   res.send("POST");
});

module.exports = router;
