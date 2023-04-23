import React, { useContext } from 'react';
import './ExpenseList.css';
import { ExpensesContext } from '../../context/ExpensesContext';

const ExpenseItem = ({ id, title, amount, date }) => {
  return (
    <div className="expense-item">
      <div className="expense-date">{date.toLocaleDateString()}</div>
      <div className="expense-title">{title}</div>
      <div className="expense-amount">${amount.toFixed(2)}</div>
    </div>
  );
};

const ExpenseList = () => {
  const { expenses } = useContext(ExpensesContext);

  return (
    <div className="expense-list">
      <h2>Expenses</h2>
      {expenses.map((expense) => (
        <ExpenseItem key={expense.id} {...expense} />
      ))}
    </div>
  );
};

export default ExpenseList;
