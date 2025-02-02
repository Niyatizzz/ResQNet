const express = require("express");
const router = express.Router();
const AidRequest = require("../models/AidRequest");

// Submit an Aid Request
router.post("/", async (req, res) => {
  try {
    const {
      type,
      location,
      details,
      createdBy,
      organizationId,
      assignedVolunteer,
    } = req.body;
    const newRequest = new AidRequest({
      type,
      location,
      details,
      createdBy,
      organizationId,
      assignedVolunteer,
    });

    await newRequest.save();
    res.status(201).json({
      message: "Aid request submitted successfully",
      request: newRequest,
    });
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
});

// Get all Aid Requests
router.get("/", async (req, res) => {
  try {
    const requests = await AidRequest.find();
    res.json(requests);
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
});

// Get Aid Requests for a Specific Organization
router.get("/organization/:orgId", async (req, res) => {
  try {
    const requests = await AidRequest.find({
      organizationId: req.params.orgId,
    });
    res.json(requests);
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
});

// Get Aid Requests Assigned to a Specific Volunteer
router.get("/volunteer/:volunteerId", async (req, res) => {
  try {
    const requests = await AidRequest.find({
      assignedVolunteer: req.params.volunteerId,
    });
    res.json(requests);
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
});

// Get Aid Requests Created by a Specific Victim
router.get("/victim/:victimId", async (req, res) => {
  try {
    const requests = await AidRequest.find({ createdBy: req.params.victimId });
    res.json(requests);
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
});

module.exports = router;
