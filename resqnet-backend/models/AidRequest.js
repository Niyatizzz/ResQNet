const mongoose = require("mongoose");

const AidRequestSchema = new mongoose.Schema({
  type: { type: String, required: true }, // e.g., "Medical", "Food", etc.
  location: { type: String, required: true },
  details: { type: String },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("AidRequest", AidRequestSchema);
