const express = require("express");
const app = express();

const { products } = require("./data");

app.get("/", (req, res) => {
  res.send(`<h1>Hey</h1> <a href="/api/products">products</a>`);
});

app.get("/api/products", (req, res) => {
  /* const newProduct = products.map((product) => {
    const { id, name, image } = product;
    return { id, name, image };
  }); */

  const newProduct = products.map((product) => {
    const { id, name, image } = product;
    return { id, name, image };
  });

  res.json(newProduct);
});

/* app.get("/api/products/1", (req, res) => {
  const singleProduct = products.find((product) => product.id === 1);
  res.send(singleProduct);
}); */

app.get("/api/products/:productId", (req, res) => {
  const { productId } = req.params;
  const singleProduct = products.find((product) => product.id === +productId);

  if (!singleProduct) {
    res.status(404).send("Product not found");
  }
  res.send(singleProduct);
});

app.get("/api/v1/query", (req, res) => {
  //   console.log(req.query);
  const { search, limit } = req.query;
  let sortedProducts = [...products];

  if (search) {
    sortedProducts = sortedProducts.filter((product) => {
      return product.name.startsWith(search);
    });
  }

  if (limit) {
    sortedProducts = sortedProducts.slice(0, +limit);
  }

  if (sortedProducts.length < 1) {
    // res.status(200).send('NOT FOUND');
    return res.status(200).json({ success: true, data: [] });
  }
  res.status(200).json(sortedProducts);
  //   res.send("hey");
});

app.listen(5000, () => {
  console.log("server listening on port 5000....");
});
