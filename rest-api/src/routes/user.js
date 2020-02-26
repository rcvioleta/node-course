const express = require("express");
const router = express.Router();

const User = require("../models/user");

router.get("/users", async (req, res, next) => {
  try {
    const users = await User.find({});
    res.status(200).send(users);
  } catch (e) {
    res.status(500).send(e);
  }
});

router.get("/user/:id", async (req, res, next) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) return res.status(200).send([]);
    res.status(200).send(user);
  } catch (e) {
    res.status(500).send(e);
  }
});

router.post("/user", async (req, res, next) => {
  try {
    const user = new User(req.body);
    await user.save();
    res.status(200).send("User created successfully!");
  } catch (e) {
    res.status(500).send(e);
  }
});

router.patch("/user/:id", async (req, res, next) => {
  try {
    const userUpdate = await User.findByIdAndUpdate(req.params.id, {
      $set: req.body
    });
    res.status(200).send(userUpdate);
  } catch (e) {
    res.status(500).send(e);
  }
});

router.delete("/user/:id", async (req, res, next) => {
  try {
    await User.findByIdAndDelete(req.params.id);
    res.status(200).send("User deleted successfully!");
  } catch (e) {
    res.status(500).send(e);
  }
});

module.exports = router;
