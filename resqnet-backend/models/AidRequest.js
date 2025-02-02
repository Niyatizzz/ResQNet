const mongoose = require("mongoose");

const AidRequestSchema = new mongoose.Schema({
  type: { type: String, required: true },
  location: {
    type: { type: String, default: "Point" },
    coordinates: {
      type: [Number], // [longitude, latitude]
      required: true, // Ensuring that coordinates are required
    },
  },
  details: { type: String },
  createdBy: { type: String },
  organizationId: { type: String },
  assignedVolunteer: { type: String },
  createdAt: { type: Date, default: Date.now },
});

AidRequestSchema.index({ location: "2dsphere" });

module.exports = mongoose.model("AidRequest", AidRequestSchema);
