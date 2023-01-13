const { identify } = require("../middleware/identify");
const Voter = require("../models/Voter");

const route = require("express").Router();

route.post("/", [identify], async (req, res) => {
  let voter = await Voter.findOne({ rfid: req.headers.rfid });
  if (!voter) {
    console.log("Not Found!");
    return res.status(444).send("RFID not found in database.");
  } else {
    console.log("Found!!");
    console.log(voter);
    if (voter.status) {
      return res.status(445).send("Already Voted");
    }
    return res.status(200).send(`${voter.id},${voter.name}`);
  }
});

module.exports = route;
