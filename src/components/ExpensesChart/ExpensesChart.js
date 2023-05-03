import React, { useContext } from 'react';
import { Bar } from 'react-chartjs-2';
import { ExpensesContext } from '../../context/ExpensesContext';

// ExpensesChart component to display expenses per month using a bar chart
const ExpensesChart = () => {
  const { expenses } = useContext(ExpensesContext);

  // Prepare the data for the Bar chart
  const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [
      {
        label: 'Expenses',
        data: expensesPerMonth(expenses),
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
    ],
  };

  // Set options for the Bar chart
  const options = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  // Calculate expenses per month from the expenses data
  const expensesPerMonth = (expenses) => {
    const monthlyExpenses = new Array(12).fill(0);

    for (const expense of expenses) {
      const month = new Date(expense.date).getMonth(); // Get the month index (0-based)
      monthlyExpenses[month] += expense.amount;
    }

    return monthlyExpenses;
  };

  // Render the Bar chart with the prepared data and options
  return (
    <div>
      <Bar data={data} options={options} />
    </div>
  );
};

export default ExpensesChart;
