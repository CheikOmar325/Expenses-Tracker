const mongoose = require('mongoose');

const expenseSchema = new mongoose.Schema({
  name: { type: String, required: true },
  cost: { type: Number, required: true },
  category: { type: String, required: true },
  date: { type: Date, required: true },
});

module.exports = mongoose.model('Expense', expenseSchema);
