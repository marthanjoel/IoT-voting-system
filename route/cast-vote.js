const Party = require("../models/Party");
const Voter = require("../models/Voter");

const route = require("express").Router();

route.post("/", async (req, res) => {
  console.log("Test");
  v = req.headers.id;
  const p = req.headers.vote;
  // update vote
  const party = await Party.findOne({ id: p });
  await party.update({ vote: party.vote + 1 });

  // update voter status
  const voter = await Voter.findOne({ id: v });
  await voter.update({ status: true });
  console.log(await Party.findOne({ id: p }));
});

module.exports = route;
