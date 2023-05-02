const mongoose = require('mongoose');

// Define the schema for the Expense model
const expenseSchema = new mongoose.Schema({
  description: { type: String, required: true },
  amount: { type: Number, required: true },
  date: { type: Date, required: true },
});

// Export the Expense model
module.exports = mongoose.model('Expense', expenseSchema);
