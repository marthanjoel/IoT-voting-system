const route = require("express").Router();

route.get("/", (req, res) => {
  res.status(200).json({ message: "rfidMatch route" });
});

module.exports = route;
