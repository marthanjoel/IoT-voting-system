const Party = require("../models/Party");
const Voter = require("../models/Voter");

const route = require("express").Router();

route.post("/", async (req, res) => {
  v = req.headers.id;
  const p = req.headers.vote;
  // update vote
  const party = await Party.findOne({ id: p });
  const voter = await Voter.findOne({ id: v });
  if (party && voter) {
    await party.update({ vote: party.vote + 1 });
    // update voter status
    await voter.update({ status: true });

    res.status(200).send("Vote Successfull");
  }
  res.status(444).send("Voting Faild");
});

module.exports = route;
