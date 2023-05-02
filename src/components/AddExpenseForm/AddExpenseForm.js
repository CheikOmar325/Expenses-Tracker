import React, { useState, useContext } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { ExpensesContext } from '../../context/ExpensesContext';

const AddExpenseForm = () => {
  const { addExpense } = useContext(ExpensesContext);

  const [name, setName] = useState('');
  const [amount, setAmount] = useState('');
  const [category, setCategory] = useState('');
  const [image, setImage] = useState(null);

  const handleImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newExpense = {
      id: uuidv4(),
      name,
      amount: parseFloat(amount),
      category,
      image,
    };

    addExpense(newExpense);
    setName('');
    setAmount('');
    setCategory('');
    setImage(null);
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Add your input fields for name, amount, and category here */}
      
      <label htmlFor="expense-image">Receipt/Image:</label>
      <input
        type="file"
        id="expense-image"
        name="expense-image"
        accept="image/*"
        onChange={handleImageChange}
      />
      
      <button type="submit">Add Expense</button>
    </form>
  );
};

export default AddExpenseForm;
