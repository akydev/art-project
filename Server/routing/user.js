// Importing required dependencies
const express = require("express"); // Express framework for routing
const { create } = require("../controllers/user"); // Importing create function from user controller to handle user creation
const authMiddleware = require("../middleware/auth");
const { loginUser } = require("../controllers/authController"); // Importing loginUser function from authController for user login
const router = express.Router(); // Creating a new router instance to define routes

// Route for creating a new user
// When a POST request is made to '/', the 'create' function from the user controller is called
router.route("/").post(create);

// Route for user login
// When a POST request is made to '/login', the 'loginUser' function from authController is called
router.route("/login").post(loginUser);

// Exporting the router so it can be used in other parts of the app (e.g., in the main server file)
module.exports = router;
