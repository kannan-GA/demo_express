// const User = require("../models/User");

// const createUser = async (req, res, next) => {
//   try {
//     const { name, email } = req.body;
//     if (!name || !email) {
//       res.status(400);
//       return next(new Error("name & email fields are required"));
//     }

//     // check if user already exists
//     const isUserExists = await User.findOne({ email });

//     if (isUserExists) {
//       res.status(404);
//       return next(new Error("User already exists"));
//     }

//     const user = await User.create({
//       name, email
//     });

//     res.status(200).json({
//       success: true,
//       user,
//     });
//   } catch (error) {
//     console.log(error);
//     return next(error);
//   }
// }

// const getUsers = async (req, res, next) => {
//   try {
//     const users = await User.find();

//     res.status(200).json({
//       success: true,
//       users,
//     });
//   } catch (error) {
//     console.log(error);
//     return next(error);
//   }
// };

// const getUser = async (req, res, next) => {
//   const { id } = req.params;
//   try {
//     const user = await User.findById(id);

//     if (!user) {
//       res.status(404);
//       return next(new Error("User not found"));
//     }

//     res.status(200).json({
//       success: true,
//       user,
//     });
//   } catch (error) {
//     console.log(error);
//     return next(error);
//   }
// };

// const updateUser = async (req, res, next) => {
//   const { id } = req.params;
//   try {
//     const user = await User.findById(id);

//     if (!user) {
//       res.status(404);
//       return next(new Error("User not found"));
//     }

//     const updatedUser = await User.findByIdAndUpdate(
//       id,
//       {
//         $set: req.body,
//       },
//       {
//         new: true,
//       }
//     );

//     res.status(200).json({
//       success: true,
//       updatedUser,
//     });
//   } catch (error) {
//     console.log(error);
//     return next(error);
//   }
// };

// const deleteUser = async (req, res, next) => {
//   const { id } = req.params;
//   try {
//     const user = await User.findById(id);

//     if (!user) {
//       res.status(404);
//       return next(new Error("User not found"));
//     }

//     await User.findByIdAndDelete(id);

//     res.status(200).json({
//       success: true,
//       message: "User has been deleted.",
//     });
//   } catch (error) {
//     console.log(error);
//     return next(error);
//   }
// };

// module.exports = {
//   getUser,
//   getUsers,
//   createUser,
//   updateUser,
//   deleteUser,
// };

// import client from "../config/db.js";

// const db = client.db("your-database-name");
// const collection = db.collection("your-collection-name");

// export const savePosition = async (req, res) => {
//   try {
//     // Your logic to save position
//     res.status(200).json({ message: "Position saved successfully" });
//   } catch (err) {
//     res.status(500).json({ error: "Failed to save position" });
//   }
// };

// export const getCities = async (req, res) => {
//   try {
//     const cities = await collection.find({}).toArray();
//     res.status(200).json(cities);
//   } catch (err) {
//     res.status(500).json({ error: "Failed to retrieve cities" });
//   }
// };

// const client = require("../config/db"); // Use require instead of import

// const db = client.db("your-database-name");
// const collection = db.collection("your-collection-name");

// const savePosition = async (req, res) => {
//   try {
//     // Your logic to save position
//     res.status(200).json({ message: "Position saved successfully" });
//   } catch (err) {
//     res.status(500).json({ error: "Failed to save position" });
//   }
// };

// const getCities = async (req, res) => {
//   try {
//     const cities = await collection.find({}).toArray();
//     res.status(200).json(cities);
//   } catch (err) {
//     res.status(500).json({ error: "Failed to retrieve cities" });
//   }
// };

// module.exports = {
//   savePosition,
//   getCities,
// };

// const { client } = require("../config/db"); // Import client

// const db = client.db("geolocationDb"); // Access the database

// // Access the `cities` collection
// const citiesCollection = db.collection("cities");

// // Access the `positions` collection
// const positionsCollection = db.collection("positions");

// const savePosition = async (req, res) => {
//   try {
//     // Example logic to save position
//     const positionData = req.body; // Assuming position data comes from the request body
//     await positionsCollection.insertOne(positionData);
//     res.status(200).json({ message: "Position saved successfully" });
//   } catch (err) {
//     res.status(500).json({ error: "Failed to save position" });
//   }
// };

// const getCities = async (req, res) => {
//   try {
//     const cities = await citiesCollection.find({}).toArray();
//     res.status(200).json(cities);
//   } catch (err) {
//     res.status(500).json({ error: "Failed to retrieve cities" });
//   }
// };

// module.exports = {
//   savePosition,
//   getCities,
// };

// controllers/positionController.js

const City = require("../models/city");
const Position = require("../models/position");

const savePosition = async (req, res) => {
  try {
    const positionData = req.body; // Assuming position data comes from the request body
    const newPosition = new Position(positionData);
    await newPosition.save();
    res.status(200).json({ message: "Position saved successfully" });
  } catch (err) {
    res.status(500).json({ error: "Failed to save position" });
  }
};

const getCities = async (req, res) => {
  try {
    const cities = await City.find({});
    res.status(200).json(cities);
  } catch (err) {
    res.status(500).json({ error: "Failed to retrieve cities" });
  }
};

module.exports = {
  savePosition,
  getCities,
};
