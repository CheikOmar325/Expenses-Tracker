import React, { useState, useContext } from 'react';
import './ExpenseForm.css';
import { ExpensesContext } from '../../context/ExpensesContext';

const ExpenseForm = () => {
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState('');
  const [date, setDate] = useState('');
  const { addExpense } = useContext(ExpensesContext);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate input values
    if (!title || !amount || !date) return;

    const newExpense = {
      id: new Date().getTime(),
      title,
      amount: parseFloat(amount),
      date: new Date(date),
    };

    // Add new expense to the list using context dispatch
    addExpense(newExpense);

    // Reset the form
    setTitle('');
    setAmount('');
    setDate('');
  };

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
      <button type="submit">Add Expense</button>
    </form>
  );
};

export default ExpenseForm;
