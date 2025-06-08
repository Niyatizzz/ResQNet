const express = require("express");
const router = express.Router();
const AidRequest = require("../models/AidRequest");
const Volunteer = require("../models/Volunteer");
const Organization = require("../models/Organization");

// Get all aid requests (for Volunteers & Organizations)
router.get("/aid-requests", async (req, res) => {
  try {
    console.log("Fetching all aid requests..."); // Debugging log
    const requests = await AidRequest.find();
    res.json(requests);
  } catch (err) {
    console.error("Error fetching aid requests:", err.message); // Debugging log
    res.status(500).json({ error: err.message });
  }
});

// Get all volunteers (for Organization Dashboard)
router.get("/volunteers", async (req, res) => {
  try {
    console.log("Fetching all volunteers..."); // Debugging log
    const volunteers = await Volunteer.find();
    res.json(volunteers);
  } catch (err) {
    console.error("Error fetching volunteers:", err.message); // Debugging log
    res.status(500).json({ error: err.message });
  }
});

// Get all organizations
router.get("/organizations", async (req, res) => {
  try {
    console.log("Fetching all organizations..."); // Debugging log
    const organizations = await Organization.find();
    res.json(organizations);
  } catch (err) {
    console.error("Error fetching organizations:", err.message); // Debugging log
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
