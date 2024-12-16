const mongoose = require("mongoose");

const employeeSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  role: { type: String, default: "Employee" },
  salary: { type: Number, required: true },
  attendance: [
    {
      date: { type: Date, default: Date.now },
      status: { type: String, enum: ["Present", "Absent", "On Leave"], default: "Present" },
    },
  ],
  performance: { type: String, default: "Good" },
});

module.exports = mongoose.model("Employee", employeeSchema);
