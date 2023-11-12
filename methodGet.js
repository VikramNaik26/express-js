const express = require("express");
const app = express();
let { people } = require("./data");
// const morgan = require("morgan");

// static assets
app.use(express.static("./methods-public"));
// inbuilt express middleware
// parse form data
app.use(express.urlencoded({ extended: false }));

app.use(express.json());

app.get("/api/people", (req, res) => {
  res.status(200).json({ success: true, data: people });
});

app.post("/api/people", (req, res) => {
  const { name } = req.body;
  if (!name) {
    return res
      .status(201)
      .json({ success: false, msg: "please provide a name value" });
  }
  //   res.status(201).send("success");
  res.json({ success: true, person: name });
});

app.post("/api/postman/people", (req, res) => {
  const { name } = req.body;
  if (!name) {
    return res
      .status(201)
      .json({ success: false, msg: "please provide a name value" });
  }
  res.status(200).json({ success: true, data: [...people, name] });
});

app.post("/login", (req, res) => {
  const { name } = req.body;
  //   console.log(req.body);
  if (name) {
    res.status(200).send(`Welcome ${name}`);
  }
  res.status(401).send("Please provide creadentials");
  //   res.send("POST");
});

app.put("/api/people/:id", (req, res) => {
  const { id } = req.params;
  const { name } = req.body;
  /* console.log(id, name);
  res.send("hello"); */
  const person = people.find((person) => person.id === +id);

  if (!person) {
    return res
      .status(404)
      .json({ success: false, msg: `no person with id ${id}` });
  }

  const newPeople = people.map((person) => {
    if (person.id === Number(id)) {
      person.name = name;
    }
    return person;
  });
  res.status(200).json({ success: true, msg: newPeople });
});

app.delete("/api/people/:id", (req, res) => {
  const person = people.find((person) => person.id === Number(req.params.id));

  if (!person) {
    return res
      .status(404)
      .json({ success: false, msg: `no person with id ${req.params.id}` });
  }
  const newPeople = people.filter((person) => person.id !== +req.params.id);
  res.status(200).json({ success: true, data: newPeople });
});

app.listen(5000, () => {
  console.log("server listening on port 5000...");
});
