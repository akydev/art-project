// Importing mongoose library to interact with MongoDB
const mongoose = require("mongoose");

// Defining the schema for the User model
const UserSchema = new mongoose.Schema(
  {
    // Defining 'firstName' field, which is a required string
    firstName: {
      type: String, // Field type is string
      require: true, // This field is mandatory when creating a new user
    },
    // Defining 'lastName' field, which is a required string
    lastName: {
      type: String, // Field type is string
      require: true, // This field is mandatory when creating a new user
    },
    // Defining 'email' field, which is a required string
    email: {
      type: String, // Field type is string
      require: true, // This field is mandatory when creating a new user
    },
    // Defining 'password' field, which is a required string
    password: {
      type: String, // Field type is string
      require: true, // This field is mandatory when creating a new user
    },
  },
  { timestamps: true } // Automatically adds 'createdAt' and 'updatedAt' fields for document creation and update times
);

// Creating the User model based on the UserSchema
const User = mongoose.model("User", UserSchema);

// Exporting the User model so it can be used in other parts of the application
module.exports = User;
