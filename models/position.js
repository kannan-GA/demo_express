// models/Position.js

const mongoose = require("mongoose");

const positionSchema = new mongoose.Schema({
  latitude: Number,
  longitude: Number,
  description: String,
  // add other fields as needed
});

const Position = mongoose.model("Position", positionSchema);

module.exports = Position;
