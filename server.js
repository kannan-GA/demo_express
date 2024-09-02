require("dotenv").config();

// console.log("MONGO_URI:", process.env.MONGO_URI); // This should log the MongoDB URI

const express = require("express");
const cors = require("cors");

const connectDB = require("./config/db");
const positionRoutes = require("./routes/positionRoutes");
const errorHandler = require("./middlewares/error");

// Connect to DB
connectDB();

// Express App
const app = express();
const port = process.env.PORT || 5000;

// middlewares
app.use(cors());
app.use(express.json());

// Routes
app.use("/", positionRoutes);

app.use("/", (req, res) => {
  return res.json({
    message: "Welcome to the Node.js REST API using ExpressJS and MongoDB",
  });
});

app.use(errorHandler);

const server = app.listen(port, () =>
  console.log(`Server started listening on ${port}`)
);

process.on("unhandledRejection", (error, promise) => {
  console.log(`Logged Error: ${error}`);
  server.close(() => process.exit(1));
});
// server.js
// import express from "express";
// import cors from "cors";
// import path from "path";
// import { connectDb } from "./config/db.js";
// import positionRoutes from "./routes/positionRoutes.js";
// import dotenv from "dotenv";

// dotenv.config();

// const app = express();
// const port = process.env.PORT || 9000;

// app.use(express.json());
// app.use(cors());

// // Serve static files from the 'dist' directory
// app.use(express.static(path.join(__dirname, "public", "dist")));

// // Use positionRoutes directly at the root level
// app.use("/", positionRoutes);

// app.get("*", (req, res) => {
//   res.sendFile(path.join(__dirname, "public", "dist", "index.html"));
// });

// connectDb().then(() => {
//   app.listen(port, () => {
//     console.log(`Server is running on http://localhost:${port}`);
//   });
// });

// process.on("unhandledRejection", (error) => {
//   console.error(`Unhandled Rejection: ${error}`);
//   app.close(() => process.exit(1));
// });
