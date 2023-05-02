import React, { createContext, useState } from 'react';

// Create the Expenses context
export const ExpensesContext = createContext();

// ExpensesProvider component wraps the app to provide expense-related state and actions
export const ExpensesProvider = ({ children }) => {
  const [expenses, setExpenses] = useState([]);

  // Function to add an expense to the list
  const addExpense = (expense) => {
    setExpenses((prevExpenses) => [...prevExpenses, expense]);
  };

  // Provide expenses and addExpense function to child components through context
  return (
    <ExpensesContext.Provider value={{ expenses, addExpense }}>
      {children}
    </ExpensesContext.Provider>
  );
};
