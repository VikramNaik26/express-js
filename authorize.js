const authorize = (req, res, next) => {
  const { user } = req.query;
  if (user === "vikram") {
    req.user = { name: "vikram", id: 63 };
    next();
    // res.send(req.user);
  } else {
    res.status(401).send("unauthorized");
  }
  console.log("authorization");
  /* const { name, password } = req.query;
  console.log(name, password); */
};

module.exports = authorize;
