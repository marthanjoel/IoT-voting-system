const Party = require("../models/Party");

const route = require("express").Router();

route.get("/", async (req, res) => {
  res.status(200).send("");
});

module.exports = route;
