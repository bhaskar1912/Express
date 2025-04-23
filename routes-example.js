const express = require("express");
const app = express();

//roou route

app.get("/", (req, res) => {
  res.send("welcome to our home page ");
});

//get al products

app.get("/products", (req, res) => {
  const products = [
    {
      id: 1,
      label: "Product 1",
    },
    {
      id: 2,
      label: "Product 2",
    },
    {
      id: 3,
      label: "Product 3",
    },
  ];
  res.json(products);
});

//get a single product

app.get("/products/:id", (req, res) => {
  const productId = parseInt(req.params.id);
  const products = [
    {
      id: 1,
      label: "Product 1",
    },
    {
      id: 2,
      label: "Product 2",
    },
    {
      id: 3,
      label: "Product 3",
    },
  ];

  const singleProduct = products.find((product) => product.id === productId);
  if (singleProduct) {
    res.json(singleProduct);
  } else {
    res.status(404).send("product is not found please try with different id");
  }
});

const port = 3000;
app.listen(port, () => {
  console.log("server is running in port " + port);
});
