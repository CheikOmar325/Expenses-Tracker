import React, { useState, useContext } from 'react';
import './ExpenseForm.css';
import { ExpensesContext } from '../../context/ExpensesContext';
import { DateTime } from 'luxon'; // Import DateTime from Luxon

const ExpenseForm = () => {
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState('');
  const [date, setDate] = useState('');
  // Initialize categories and set the initial category state to the first category
  const categories = ['Groceries', 'Subscriptions', 'Bills', 'Entertainment', 'Transportation', 'Other'];
  const [category, setCategory] = useState(categories[0]);
  const { addExpense } = useContext(ExpensesContext);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate input values
    if (!title || !amount || !date || !category) return;

    const newExpense = {
      id: new Date().getTime(),
      title,
      amount: parseFloat(amount),
      date: DateTime.fromISO(date).toJSDate(), // Create a JavaScript Date object from the ISO date string
      category,
    };

    // Add new expense to the list using context dispatch
    addExpense(newExpense);

    // Reset the form
    setTitle('');
    setAmount('');
    setDate('');
    setCategory(categories[0]);
  };

  // Render the form
  return (
    <form className="expense-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="number"
        step="0.01"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />
      {/* Render the select element for categories */}
      <select value={category} onChange={(e) => setCategory(e.target.value)}>
        {categories.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>
      <button type="submit">Add Expense</button>
    </form>
  );
};

export default ExpenseForm;
