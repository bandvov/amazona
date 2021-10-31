const express = require("express");
const { User } = require("../models/userModel");
const { users } = require("../data/data ");
const { generageToken } = require("../utils");
const sha256 = require("sha256");

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

userRouter.post("/signin", async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (user) {
      if (sha256(req.body.password) === user.password) {
        res.json({
          _id: user._id,
          name: user.name,
          email: user.email,
          isAdmin: user.isAdmin,
          token: await generageToken({ email: user.email }),
        });
        return;
      } else {
        res.status(400).json({ message: "Incorrect email or password" });
      }
    } else {
      res.status(404).json({ message: "User not found." });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
});

module.exports = { userRouter };
