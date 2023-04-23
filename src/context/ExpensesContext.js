import React, { createContext, useState } from 'react';

export const ExpensesContext = createContext();

export const ExpensesProvider = ({ children }) => {
  const [expenses, setExpenses] = useState([]);

  const addExpense = (expense) => {
    setExpenses((prevExpenses) => [...prevExpenses, expense]);
  };

  return (
    <ExpensesContext.Provider value={{ expenses, setExpenses, addExpense }}>
      {children}
    </ExpensesContext.Provider>
  );
};
