// models/Position.js

// const mongoose = require("mongoose");

// const positionSchema = new mongoose.Schema({
//   latitude: Number,
//   longitude: Number,
//   description: String,
//   // add other fields as needed
// });

// const Position = mongoose.model("Position", positionSchema);

// module.exports = Position;
// const mongoose = require("mongoose");

// const positionSchema = new mongoose.Schema({
//   userId: { type: String, required: true },
//   lat: { type: Number, required: true },
//   lng: { type: Number, required: true },
// });

// module.exports = mongoose.model("Position", positionSchema);
const mongoose = require("mongoose");

const positionSchema = new mongoose.Schema({
  userId: String,
  lat: Number,
  lng: Number,
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Position = mongoose.model("Position", positionSchema);

module.exports = Position;
