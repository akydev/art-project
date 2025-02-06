// Importing the required dependencies
const User = require("../model/user"); // Importing the User model to interact with the database
const bcrypt = require("bcryptjs"); // Library to hash and generate salt for passwords

// The 'create' function is responsible for handling user registration
const create = async (req, res) => {
  try {
    // Destructuring the user input from the request body
    const { firstName, lastName, email, password } = req.body;

    // Checking if all required fields (firstName, lastName, email, password) are provided
    if (!firstName || !lastName || !email || !password) {
      return res.status(400).json({ message: "All fields are required!" }); // Returning a 400 Bad Request if any field is missing
    }

    // Checking if a user with the same email already exists in the database
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      // If an existing user is found, return a 400 Bad Request with an appropriate message
      return res.status(400).json({ message: "Email is already exists!" });
    }

    // Generate a salt for password hashing to make the password more secure
    const genSalt = await bcrypt.genSalt(10); // 10 is the number of salt rounds
    // Hashing the password with the generated salt
    const hashPassword = await bcrypt.hash(password, genSalt);

    // Creating a new user in the database with the hashed password
    const user = await User.create({
      firstName, // First name of the user
      lastName, // Last name of the user
      email, // Email of the user
      password: hashPassword, // The hashed password
    });

    // If the user is successfully created, return a 201 Created response with a success message
    res.status(201).json({ message: "Register successful" });
  } catch (error) {
    // If any error occurs during the process, return a 500 Internal Server Error with the error message
    res.status(500).json({ message: error.message });
  }
};

// Exporting the 'create' function to use it in other parts of the application
module.exports = { create };
