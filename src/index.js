const express = require("express");
const app= express();
app.use(express.json());

const userController=require("./controllers/user.controller");
const { register, login } = require("./controllers/athcontroller.js");


app.use("/user",userController);
app.use("/register",register);
app.use("/login",login)
module.exports = app;