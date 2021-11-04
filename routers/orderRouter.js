const express = require("express");
const Order = require("../models/OrderModel");
const { isAuth } = require("../utils");
const orderRouter = express.Router();

orderRouter.post("/", isAuth, async (req, res) => {
  if (!req.body.cartItems.length) {
    res.status(400).json({ message: "Cart is empty" });
  } else {
    try {
      const createdOrder = new Order({ ...req.body, user: req.user });

      await createdOrder.save();

      res.status(201).json({ message: "Order created", order: createdOrder });
    } catch (err) {
      res.json({ message: "Internal server error" });
    }
  }
});

module.exports = { orderRouter };
