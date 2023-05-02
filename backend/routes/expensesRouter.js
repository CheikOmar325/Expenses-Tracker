const express = require("express");
const expensesController = require("../controllers/expensesController");

// Initialize the router
const router = express.Router();

// Define routes for the expenses resource
router.get("/", expensesController.getAllExpenses); // Get all expenses
router.post("/", expensesController.createExpense); // Create a new expense
router.get("/:id", expensesController.getExpenseById); // Get a specific expense by its ID
router.put("/:id", expensesController.updateExpense); // Update a specific expense by its ID
router.delete("/:id", expensesController.deleteExpense); // Delete a specific expense by its ID

// Export the router
module.exports = router;
