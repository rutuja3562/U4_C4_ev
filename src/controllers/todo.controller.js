const express = require("express");
const Todo = require("../models/todo.model");
const router = express.Router();

router.post("", async (req, res) => {
  try {
    const todo = await User.create(req.body);
    return res.status(201).send(todo);
  } catch (err) {
    return res.status(500).send({ massege: err.massege });
  }
});

router.get("", async (req, res) => {
  try {
    const todo = await todo.find().lean().exec();
    return res.status(200).send(todo);
  } catch (err) {
    return res.status(500).send({ massege: err.massege });
  }
});


module.exports = router;
