const express = require("express");
const router = express.Router();
const Volunteer = require("../models/Volunteer");

// Register a Volunteer
router.post("/register", async (req, res) => {
  try {
    const { name, email, organization } = req.body;
    const newVolunteer = new Volunteer({ name, email, organization });
    await newVolunteer.save();
    res.status(201).json({ message: "Volunteer registered successfully" });
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
});

// Get volunteer's organization (Mock: Assume request has a user)
// Get All Volunteers
router.get("/", async (req, res) => {
  try {
    const volunteers = await Volunteer.find();
    res.json(volunteers);
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
});

module.exports = router;
