const mongoose = require("mongoose");

const Party = new mongoose.Schema({
  id: {
    type: Number,
    required: true,
    unique: true,
  },
  name: {
    type: String,
    required: true,
  },
  party: {
    type: String,
    required: true,
  },
  vote: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model("Party", Party);
