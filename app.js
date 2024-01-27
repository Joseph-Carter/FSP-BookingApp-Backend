const express = require("express");
const cors = require("cors");
const app = express();
const usersController = require("./controller/usersController")
const eventSpaceController = require("./controller/eventSpacesController")
const bookingController = require("./controller/bookingController")

app.use(cors());
app.use(express.json());

app.use("/users", usersController)
app.use("/eventSpace", eventSpaceController)
app.use("/bookings", bookingController)

app.get("/", (req, res) => {
    res.send("Welcome to Booking App");
  });
  
  app.get("*", (req, res) => {
    res.status(404).json({ success: false, data: { error: "Page not found! " } });
  });
  

module.exports = app;