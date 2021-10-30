const express = require("express");
const { Product } = require("../models/productModel");
const { products } = require("../data/data ");

const productRouter = express.Router();

productRouter.get("/seed", async (req, res) => {
  const createdProducts = await Product.insertMany(products).catch((err) => {
    res.json({ message: err.message });
  });
  if (createdProducts) {
    res.send({ createdProducts }).catch((err) => {
      res.status(400).json({ message: err.message });
    });
  }
});
productRouter.get("/", (req, res) => {
  Product.find()
    .then((response) => {
      return res.json({ products: response });
    })
    .catch((err) => {
      if (err) {
        return res.status(500).json({ message: err.message });
      }
    });
});
productRouter.get("/:id", async (req, res) => {
  const { id } = req.params;
  const product = await Product.findById(id);

  if (product) {
    res.json({ product });
  } else {
    res.status(404).json({ message: "Product not found" });
  }
});

module.exports = { productRouter };
