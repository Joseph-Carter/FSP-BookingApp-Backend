const express = require("express");
const cors = require("cors");
const app = express();
const userController = require("./controller/usersController")

app.use(cors());
app.use(express.json());

app.use("/users", userController)

app.get("/", (req, res) => {
    res.send("Welcome to Booking App");
  });
  
  app.get("*", (req, res) => {
    res.status(404).json({ success: false, data: { error: "Page not found! " } });
  });
  

module.exports = app;