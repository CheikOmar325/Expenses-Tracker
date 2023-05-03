import React, { useContext } from 'react';
import { Pie } from 'react-chartjs-2';
import { ExpensesContext } from '../../context/ExpensesContext';

// PieChart component to display expenses by category
const PieChart = () => {
  const { expenses } = useContext(ExpensesContext);

  // Calculate the total expenses for each category
  const categories = expenses.reduce((acc, expense) => {
    if (acc[expense.category]) {
      acc[expense.category] += expense.amount;
    } else {
      acc[expense.category] = expense.amount;
    }
    return acc;
  }, {});

  // Prepare the data for the Pie chart
  const data = {
    labels: Object.keys(categories),
    datasets: [
      {
        data: Object.values(categories),
        backgroundColor: [
          '#FF6384',
          '#36A2EB',
          '#FFCE56',
          '#4BC0C0',
          '#9966FF',
          '#FF9F40',
        ],
      },
    ],
  };

  // Render the Pie chart with the prepared data
  return (
    <div>
      <h2>Expenses by Category</h2>
      <Pie data={data} />
    </div>
  );
};

export default PieChart;
