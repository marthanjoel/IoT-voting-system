const Party = require("../models/Party");
const Voter = require("../models/Voter");

const route = require("express").Router();

route.get("/", async (req, res) => {
  const voter = await Voter.find().lean();
  console.log(voter);
  res.status(200).json({ data: voter });
});

module.exports = route;
