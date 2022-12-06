const route = require("express").Router();

route.get("/", (req, res) => {
  res.status(200).json({ message: "Root Route" });
});

module.exports = route;
