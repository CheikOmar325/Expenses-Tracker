import React, { useState, useContext } from 'react';
import { ExpensesContext } from '../../context/ExpensesContext';
import { DateTime } from 'luxon';

const ExpenseForm = () => {
  const { addExpense } = useContext(ExpensesContext);
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState('');
  const [category, setCategory] = useState('');
  const [date, setDate] = useState('');
  const [image, setImage] = useState(null);

  const onSubmit = (e) => {
    e.preventDefault();
    const expense = {
      id: new Date().getTime(),
      title,
      amount: parseFloat(amount),
      category,
      date: DateTime.fromISO(date).toJSDate(),
      image,
    };
    addExpense(expense);
    setTitle('');
    setAmount('');
    setCategory('');
    setDate('');
    setImage(null);
  };

  const onImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setImage(URL.createObjectURL(e.target.files[0]));
    }
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <input
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        required
      />
      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        required
      />
      <select value={category} onChange={(e) => setCategory(e.target.value)} required>
        <option value="">Select category</option>
        <option value="Groceries">Groceries</option>
        <option value="Subscriptions">Subscriptions</option>
        <option value="Bills">Bills</option>
        <option value="Entertainment">Entertainment</option>
        <option value="Transportation">Transportation</option>
        <option value="Other">Other</option>
      </select>
      <input type="file" accept="image/*" onChange={onImageChange} />
      <button type="submit">Add Expense</button>
    </form>
  );
};

export default ExpenseForm;
