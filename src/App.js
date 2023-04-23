import React, { useState, useEffect } from 'react';
import './App.css';

import ExpenseForm from './components/ExpenseForm/ExpenseForm';
import ExpenseList from './components/ExpenseList/ExpenseList';
import Dashboard from './components/Dashboard/Dashboard';

import { ExpensesProvider } from './context/ExpensesContext';

const App = () => {
  return (
    <ExpensesProvider>
      <div className="App">
        <h1>Expenses Tracker</h1>
        <Dashboard />
        <ExpenseForm />
        <ExpenseList />
      </div>
    </ExpensesProvider>
  );
};

export default App;
