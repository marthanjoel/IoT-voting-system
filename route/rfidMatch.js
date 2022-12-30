const Voter = require("../models/Voter");

const route = require("express").Router();

route.post("/", async (req, res) => {
  req.headers.rfid;
  let voter = await Voter.findOne({ rfid: req.headers.rfid });
  if (!voter) {
    return res.status(444).json({ message: "RFID not found in database." });
  } else {
    res.status(200).json({ name: voter.name, id: voter.id });
  }
});

module.exports = route;
