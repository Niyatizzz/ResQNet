const mongoose = require("mongoose");

const VolunteerSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, unique: true, required: true },
  organization: { type: String, default: "None" },
});

module.exports = mongoose.model("Volunteer", VolunteerSchema);
