require("dotenv").config();

const express = require("express");
const app = express();

const DatabaseConnection = require("./database/db");
const userSchema = require("./models/user.schema");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const cors = require("cors");
const path = require("path");

const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors());

// registration route
app.post("/api/v1/registration", async (req, res) => {
  try {
    const { username, email, phone, password } = req.body;

    // Check if user with the same email already exists
    const existingUser = await userSchema.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ msg: "Email already exists" });
    }

    // Create new user
    const newUser = new userSchema({
      username,
      email,
      phone,
      password: bcrypt.hashSync(password, 10),
    });

    await newUser.save();
    res.status(201).json({ msg: "Registration successful", user: newUser });
  } catch (error) {
    console.error("Failed to register:", error);
    res.status(500).json({ msg: "Registration failed" });
  }
});

// login route
app.post("/api/v1/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await userSchema.findOne({ email });

    if (!user) {
      return res.status(404).json({ msg: "Invalid Email" });
    }

    // Check password
    const isPasswordValid = bcrypt.compareSync(password, user.password);
    if (!isPasswordValid) {
      return res.status(400).json({ msg: "Invalid Password" });
    }

    // jwt token
    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET_KEY, {
      expiresIn: "5d",
    });

    res.status(200).json({ msg: "Login Successful", token });
  } catch (error) {
    console.error("Login error:", error);
    res.status(500).json({ msg: "Login failed" });
  }
});

/********************************************** */
app.get("/", (req, res) => {
  app.use(express.static(path.resolve(__dirname, "frontend", "dist")));
  res.sendFile(path.resolve(__dirname, "frontend", "dist", "index.html"));
});

DatabaseConnection()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Connect to : http://localhost:${PORT}`);
    });
  })
  .catch(() => {
    console.log("Failed in Database and server");
  });
