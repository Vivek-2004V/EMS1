const express = require("express");
const router = express.Router();
const {
  createEmployee,
  getEmployees,
  getEmployeeById,
  updateEmployee,
  deleteEmployee,
} = require("../controllers/employeeController");

// Routes
router.post("/", createEmployee); // Create
router.get("/", getEmployees); // Read all
router.get("/:id", getEmployeeById); // Read one
router.put("/:id", updateEmployee); // Update
router.delete("/:id", deleteEmployee); // Delete

module.exports = router;
