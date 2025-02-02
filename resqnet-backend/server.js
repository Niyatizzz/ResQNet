require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Connect to MongoDB
const MONGO_URI = process.env.MONGO_URI || "mongodb://127.0.0.1:27017/resqnet";
mongoose
  .connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("✅ MongoDB Connected"))
  .catch((err) => console.error("❌ MongoDB Connection Error:", err));

// Import Routes
const authRoutes = require("./routes/auth");
const aidRequestRoutes = require("./routes/aidRequests");
const volunteerRoutes = require("./routes/volunteers");
const dashboardRoutes = require("./routes/Dashboard");

// Use Routes
app.use("/auth", authRoutes);
app.use("/api/aid-requests", aidRequestRoutes); // Changed to `/api/aid-requests`
app.use("/api/volunteers", volunteerRoutes); // Changed to `/api/volunteers`
app.use("/dashboard", dashboardRoutes);

// Basic Test Route
app.get("/", (req, res) => {
  res.send("🚀 ResQNet Backend Running!");
});

// Start the Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
