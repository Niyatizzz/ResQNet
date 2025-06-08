const mongoose = require("mongoose");

const OrganizationSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  volunteers: [{ type: mongoose.Schema.Types.ObjectId, ref: "Volunteer" }],
});

module.exports = mongoose.model("Organization", OrganizationSchema);
