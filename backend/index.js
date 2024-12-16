const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const config = require("./config"); // Import config file

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Connection
mongoose
  .connect(config.mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("MongoDB connection error:", err));

// Routes
app.use("/api/employees", require("./routes/employeeRoutes"));

// Error-Handling Middleware
app.use((err, req, res, next) => {
  console.error("Error: ", err.message); // Log error for debugging
  res.status(err.status || 500).json({
    error: {
      message: err.message || "An unexpected error occurred",
    },
  });
});

// Server Initialization
const PORT = config.port; // Use the port from config
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
