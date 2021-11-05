const express = require("express");
const { User } = require("../models/userModel");
const { users } = require("../data/data ");
const { generateToken } = require("../utils");
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
          token: await generateToken({ email: user.email, userId: user._id }),
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

userRouter.post("/register", async (req, res) => {
  try {
    const userExist = await User.findOne({ email: req.body.email });
    if (userExist) {
      res.status(400).json({ message: "User already exists." });
    }
    const createdUser = new User({
      name: req.body.name,
      email: req.body.email,
      password: sha256(req.body.password),
    });
    await createdUser.save();
    if (createdUser) {
      res.json({
        _id: createdUser._id,
        name: createdUser.name,
        email: createdUser.email,
        isAdmin: createdUser.isAdmin,
        token: await generateToken({ email: createdUser.email }),
      });
    }
  } catch (err) {
    console.error(err);
    res.json({ message: "Something went wrong" });
  }
});

module.exports = { userRouter };
