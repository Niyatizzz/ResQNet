const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/User");

const router = express.Router();

// Signup Route
router.post("/register", async (req, res) => {
  try {
    const { name, email, password, role } = req.body;

    // Encrypt Password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Save User
    const user = new User({ name, email, password: hashedPassword, role });
    await user.save();

    res.status(201).json({ message: "User Registered" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Login Route
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });

    if (!user) return res.status(400).json({ message: "User Not Found" });

    // Compare Passwords
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch)
      return res.status(400).json({ message: "Invalid Credentials" });

    // Generate Token
    const token = jwt.sign({ id: user._id, role: user.role }, "secretKey", {
      expiresIn: "1h",
    });

    res.json({ token });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
