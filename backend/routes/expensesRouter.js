const express = require("express");
const expensesController = require("../controllers/expensesController");

const router = express.Router();

router.get("/", expensesController.getAllExpenses);
router.post("/", expensesController.createExpense);
router.get("/:id", expensesController.getExpenseById);
router.put("/:id", expensesController.updateExpense);
router.delete("/:id", expensesController.deleteExpense);

module.exports = router;
