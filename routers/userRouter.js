const express = require("express");
const { User } = require("../models/userModel");
const { users } = require("../data/data ");

const userRouter = express.Router();

userRouter.get("/seed", async (req, res) => {
  const createdUsers = await User.insertMany(users).catch((err) => {
    if (err) {
      res.json({ message: err.message });
    }
  });
  if (createdUsers) {
    res.send(createdUsers);
  }
});

module.exports = { userRouter };
