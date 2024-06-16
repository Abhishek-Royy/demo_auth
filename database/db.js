const mongoose = require("mongoose");

const MONGO_URL = process.env.MONGO_URI;

const connectDB = async () => {
  try {
    await mongoose.connect(MONGO_URL);
    console.log("Database connection sucessfull");
  } catch (error) {
    console.log("Failed to connect with Database");
  }
};

module.exports = connectDB;
