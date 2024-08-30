// const express = require("express");
// const {
//   createUser,
//   updateUser,
//   deleteUser,
//   getUser,
//   getUsers
// } = require("../controllers/user");

// const router = express.Router();

// // create a user
// router.post("/", createUser);

// // get all users
// router.get("/", getUsers);

// // get a user
// router.get("/:id", getUser);

// // update a user
// router.put("/:id", updateUser);

// // delete a user
// router.delete("/:id", deleteUser);

// module.exports = router;

// import express from "express";
// import { savePosition, getCities } from "../controllers/positionController.js";
// const {
//   savePosition,
//   getCities,
// } = require("../controllers/positionController");

// const router = express.Router();

// router.post("/save-position", savePosition);
// router.get("/cities", getCities);

// export default router;

const express = require("express");
const {
  savePosition,
  getCities,
} = require("../controllers/positionController");

const router = express.Router();

// Define routes relative to /cities
router.post("/save-position", savePosition); // Accessible at /save-position
router.get("/cities", getCities); // Accessible at /cities

module.exports = router;
