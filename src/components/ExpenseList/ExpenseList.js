import React, { useContext, useMemo } from 'react';
import './ExpenseList.css';
import { ExpensesContext } from '../../context/ExpensesContext';
import { ReactTabulator } from 'react-tabulator';
import 'react-tabulator/lib/styles.css';
import 'react-tabulator/lib/css/tabulator.min.css';

// ExpenseList component to display a table of expenses
const ExpenseList = () => {
  const { expenses } = useContext(ExpensesContext);

  // Calculate the total amount of expenses
  const totalAmount = useMemo(() => {
    return expenses.reduce((total, expense) => total + expense.amount, 0);
  }, [expenses]);

  // Render the footer with the total amount
  const footer = (
    <div style={{ display: 'flex', justifyContent: 'flex-end', paddingRight: '1rem' }}>
      Total: ${totalAmount.toFixed(2)}
    </div>
  );

  // Custom sorter function for dates
  const dateSorter = (a, b) => {
    const dateA = new Date(a.date);
    const dateB = new Date(b.date);
    return dateA - dateB;
  };

  // Define the columns for the tabulator
  const columns = [
    { title: 'Title', field: 'title', width: 200 },
    { title: 'Amount', field: 'amount', width: 150, sorter: 'number' },
    {
      title: 'Date',
      field: 'date',
      width: 250, // Updated width for the date column
      sorter: dateSorter,
      formatter: (cell) => {
        const date = new Date(cell.getValue());
        const timezoneOffset = date.getTimezoneOffset() * 60 * 1000;
        const localDate = new Date(date.getTime() + timezoneOffset);
        return localDate.toLocaleDateString();
      },
    },
    { title: 'Category', field: 'category', width: 200 },
    {
      title: 'Image',
      field: 'image',
      width: 200,
      formatter: 'html',
      formatterParams: {
        target: '_blank',
      },
      formatter: (cell) => {
        if (cell.getValue()) {
          return `<img src="${cell.getValue()}" alt="Expense image" style="width: 50px; height: auto;" />`;
        } else {
          return '';
        }
      },
    },
  ];

  // Render the expense list with the tabulator
  return (
    <div className="expense-list">
      <h2>Expenses</h2>
      <ReactTabulator
        data={expenses}
        columns={columns}
        footerElement={footer}
      />
    </div>
  );
};

export default ExpenseList;
