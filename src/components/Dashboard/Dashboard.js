import React, { useContext } from 'react';
import './Dashboard.css';
import { ExpensesContext } from '../../context/ExpensesContext';

const Dashboard = () => {
  const { expenses } = useContext(ExpensesContext);

  // Calculate total expenses
  const totalExpenses = expenses.reduce((total, expense) => total + expense.amount, 0);

  return (
    <div className="dashboard">
      <h2>Dashboard</h2>
      <div className="total-expenses">
        <span>Total Expenses:</span>
        <span>${totalExpenses.toFixed(2)}</span>
      </div>
    </div>
  );
};

export default Dashboard;