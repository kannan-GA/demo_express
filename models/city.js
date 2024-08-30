// const mongoose = require("mongoose");

// const userSchema = new mongoose.Schema(
//   {
//     name: {
//       type: String,
//       required: [true, "User name is required"],
//       unique: true,
//     },
//     email: {
//       type: String,
//       required: [true, "Email is required"],
//       unique: true,
//     },
//   },
//   {
//     timestamps: true,
//   }
// );

// module.exports = mongoose.model("User", userSchema);
// models/City.js

const mongoose = require("mongoose");

const citySchema = new mongoose.Schema({
  id: { type: String, required: true, unique: true }, // Custom id field
  name: String,
  country: String,
  emoji: String,
  date: Date,
  notes: String,
  position: {
    latitude: Number,
    longitude: Number,
  },
  id: String,
});

const City = mongoose.model("city", citySchema);

module.exports = City;
