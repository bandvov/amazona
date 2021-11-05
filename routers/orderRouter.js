const express = require("express");
const Order = require("../models/OrderModel");
const { isAuth } = require("../utils");
const orderRouter = express.Router();

orderRouter.post("/create", isAuth, async (req, res) => {
  if (!req.body.orderItems.length) {
    res.status(400).json({ message: "Cart is empty" });
  } else {
    try {
      const createdOrder = new Order({ ...req.body, user: req.user.userId });

      await createdOrder.save();

      res.status(201).json({ message: "Order created", order: createdOrder });
    } catch (err) {
      console.log(err);
      res.status(500).json({ message: "Internal server error" });
    }
  }
});

module.exports = { orderRouter };
