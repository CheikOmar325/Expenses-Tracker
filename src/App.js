import React from 'react';
import './App.css';

import ExpenseForm from './components/ExpenseForm/ExpenseForm';
import ExpenseList from './components/ExpenseList/ExpenseList';
import Dashboard from './components/Dashboard/Dashboard';

import { ExpensesProvider } from './context/ExpensesContext';

// Main App component
const App = () => {
  // Wrap the app with ExpensesProvider to provide context for managing expenses
  return (
    <ExpensesProvider>
      <div className="App">
        <h1>Expenses Tracker</h1>
        <Dashboard />         // Render the Dashboard component
        <ExpenseForm />       // Render the ExpenseForm component
        <ExpenseList />       // Render the ExpenseList component
      </div>
    </ExpensesProvider>
  );
};

export default App;
