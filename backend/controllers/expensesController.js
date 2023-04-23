const Expense = require("../models/expenseModel");

const getAllExpenses = async (req, res) => {
  try {
    const expenses = await Expense.find();
    res.status(200).json(expenses);
  } catch (error) {
    res.status(500).json({ message: "Error fetching expenses", error });
  }
};

const createExpense = async (req, res) => {
  const newExpense = new Expense(req.body);

  try {
    const savedExpense = await newExpense.save();
    res.status(201).json(savedExpense);
  } catch (error) {
    res.status(500).json({ message: "Error creating expense", error });
  }
};

const getExpenseById = async (req, res) => {
  try {
    const expense = await Expense.findById(req.params.id);
    if (!expense) {
      res.status(404).json({ message: "Expense not found" });
    } else {
      res.status(200).json(expense);
    }
  } catch (error) {
    res.status(500).json({ message: "Error fetching expense", error });
  }
};

const updateExpense = async (req, res) => {
  try {
    const updatedExpense = await Expense.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!updatedExpense) {
      res.status(404).json({ message: "Expense not found" });
    } else {
      res.status(200).json(updatedExpense);
    }
  } catch (error) {
    res.status(500).json({ message: "Error updating expense", error });
  }
};

const deleteExpense = async (req, res) => {
  try {
    const deletedExpense = await Expense.findByIdAndRemove(req.params.id);
    if (!deletedExpense) {
      res.status(404).json({ message: "Expense not found" });
    } else {
      res.status(200).json({ message: "Expense deleted" });
    }
  } catch (error) {
    res.status(500).json({ message: "Error deleting expense", error });
  }
};

module.exports = {
  getAllExpenses,
  createExpense,
  getExpenseById,
  updateExpense,
  deleteExpense,
};
