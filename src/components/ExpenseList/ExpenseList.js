import React, { useContext } from 'react';
import './ExpenseList.css';
import { ExpensesContext } from '../../context/ExpensesContext';
import { ReactTabulator } from 'react-tabulator';
import 'react-tabulator/lib/styles.css';
import 'react-tabulator/lib/css/tabulator.min.css';
import { DateTime } from 'luxon';
window.DateTime = DateTime;

const ExpenseList = () => {
  const { expenses } = useContext(ExpensesContext);

  const columns = [
    { title: 'Title', field: 'title', width: 200 },
    { title: 'Amount', field: 'amount', width: 150, sorter: 'number' },
    {
      title: 'Date',
      field: 'date',
      sorter: 'date',
      sorterParams: { format: 'YYYY-MM-DD' }, // Set the date format for sorting
      formatter: (cell) => {
        return DateTime.fromISO(cell.getValue()).toLocaleString(); // Convert date string to local date string
      },
    },
    { title: 'Category', field: 'category', width: 200 },
  ];

  return (
    <div className="expense-list">
      <h2>Expenses</h2>
      <ReactTabulator
        data={expenses}
        columns={columns}
        initialSort={[
          // Add initialSort property to sort expenses by date in descending order
          { column: 'date', dir: 'desc' },
        ]}
      />
    </div>
  );
};

export default ExpenseList;
