const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const userSchema=require("../models/user.schema")

//  GET ALL THE USER LIST
router.get("/", async (req, res) => {
  const allUserList = await userSchema.find();
  res.send(allUserList);
});



//  NEW USER CREATE
router.post("/", (req, res) => {
  const newUser = new Users({
    name: req.body.name,
    email: req.body.email,
    password: bcrypt.hashSync(req.body.password, 10),
    phone: req.body.phone,
    isAdmin: req.body.isAdmin,
  });
  newUser.save();

  res.status(200).json({ msg: "User Registration Sucessfull", newUser });
});

//  LOGIN ROUTE API
router.post("/login", async (req, res) => {
  try {
    const userExist = await Users.findOne({ email: req.body.email });
    if (
      userExist &&
      bcrypt.compareSync(req.body.password, userExist.password)
    ) {
      //  USE JWT
      const token = jwt.sign(
        {
          userId: this._id,
        },
        process.env.JWT_SECRET_KEY,
        {
          expiresIn: "5d",
        }
      );

      res.status(200).json({ msg: "Login Successfull", token });
    } else {
      res.status(400).json({ msg: "Invalid credential" });
    }
  } catch (error) {
    console.log("Somthing error in Login", error);
  }
});

module.exports = router;
