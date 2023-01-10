const Party = require("../models/Party");
const Voter = require("../models/Voter");

const route = require("express").Router();

route.get("/", async (req, res) => {
  const parties = await Party.find().lean();
  let total = 0;
  parties.forEach((party) => {
    total += party.vote;
  });
  const partyList = await Party.find().distinct("party").lean();
  res.status(200).json({ data: parties, total: total, partyList: partyList });
});

module.exports = route;
