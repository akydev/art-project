// Importing required libraries
const jwt = require("jsonwebtoken"); // JSON Web Token for generating authentication tokens
const bcrypt = require("bcryptjs"); // Library to hash and compare passwords
const User = require("../model/user"); // Importing the User model to interact with the database

// The loginUser function is responsible for handling user login
const loginUser = async (req, res) => {
  try {
    // Destructuring the email and password from the request body
    const { email, password } = req.body;

    // Check if both email and password are provided; if not, return a 400 Bad Request response
    if (!email || !password) {
      return res.status(400).json({ msg: "Email or Password is required!" });
    }

    // Find the user in the database based on the provided email
    const user = await User.findOne({ email });

    // If no user is found with the provided email, return a 404 Not Found response
    if (!user) {
      return res.status(404).json({ msg: "Email does not exist!" });
    }

    // Compare the provided password with the hashed password stored in the database
    const isPasswordValid = await bcrypt.compare(password, user.password);

    // If the password doesn't match, return a 401 Unauthorized response
    if (!isPasswordValid) {
      return res.status(401).json({ msg: "Password does not match!" });
    }

    // If login is successful, generate a JWT token with the user's ID and an expiration time of 8 hours
    const jwtToken = await jwt.sign({ id: user._id }, "secret", {
      expiresIn: "8h", // Token expires in 8 hours
    });

    // Return a 200 OK response with a success message, the generated JWT token, and the user's ID
    return res
      .status(200)
      .json({ msg: "Login Successful!", token: jwtToken, userId: user._id });
  } catch (error) {
    // If any error occurs, return a 500 Internal Server Error response with the error message
    res.status(500).json({ message: error.message });
  }
};

// Exporting the loginUser function so it can be used in other parts of the application
module.exports = { loginUser };
