// const mongoose = require("mongoose");
// mongoose.set("strictQuery", false);

// const connectDB = async () => {
//   try {
//     const conn = await mongoose.connect(process.env.MONGO_URI);
//     console.log(`MongoDB connected: ${conn.connection.host}`);
//   } catch (error) {
//     console.log(error);
//     process.exit(1);
//   }
// };

// module.exports = connectDB;
// const mongoose = require("mongoose");
// mongoose.set("strictQuery", false);

// const connectDB = async () => {
//   try {
//     const conn = await mongoose.connect(process.env.MONGO_URI);
//     console.log(`MongoDB connected: ${conn.connection.host}`);
//   } catch (error) {
//     console.log(error);
//     process.exit(1);
//   }
// };

// module.exports = connectDB;
// const { MongoClient } = require("mongodb");

// const uri = process.env.MONGO_URI;
// const client = new MongoClient(uri, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });

// async function connectDb() {
//   try {
//     await client.connect();
//     console.log("Connected to MongoDB Atlas");
//   } catch (err) {
//     console.error("Failed to connect to MongoDB", err);
//     process.exit(1);
//   }
// }

// module.exports = {
//   client,
//   connectDb,
// };
// db.js;

// const mongoose = require("mongoose");
// mongoose.set("strictQuery", false);

// const connectDB = async () => {
//   try {
//     const conn = await mongoose.connect(process.env.MONGO_URI);
//     console.log(`MongoDB connected: ${conn.connection.host}`);
//   } catch (error) {
//     console.log(error);
//     process.exit(1);
//   }
// };

// module.exports = connectDB; // Ensure this line is present
// const { MongoClient } = require("mongodb");
// require("dotenv").config();

// const uri = process.env.MONGO_URI; // Make sure MONGO_URI is defined in your .env file
// const client = new MongoClient(uri, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });

// const connectDB = async () => {
//   try {
//     await client.connect();
//     console.log("MongoDB connected");
//   } catch (error) {
//     console.error("Failed to connect to MongoDB", error);
//     process.exit(1);
//   }
// };

// module.exports = {
//   connectDB,
//   client, // Export client if needed elsewhere
// };

// config/db.js

const mongoose = require("mongoose");
require("dotenv").config();

mongoose.set("strictQuery", false);

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(`MongoDB connected: ${conn.connection.host}`);
  } catch (error) {
    console.error("Failed to connect to MongoDB", error);
    process.exit(1);
  }
};

module.exports = connectDB;
