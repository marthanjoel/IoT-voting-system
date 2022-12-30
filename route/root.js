const route = require("express").Router();

route.get("/", (req, res) => {
  res
    .status(200)
    .json({ sensor: "gps", time: 1351824120, data: [48.75608, 2.302038] });
});

module.exports = route;
