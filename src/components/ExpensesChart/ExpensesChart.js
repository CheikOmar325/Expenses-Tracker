import React, { useContext } from 'react';
import { Bar } from 'react-chartjs-2';
import { ExpensesContext } from '../../context/ExpensesContext';

const ExpensesChart = () => {
  const { expenses } = useContext(ExpensesContext);

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

  const options = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  const expensesPerMonth = (expenses) => {
    const monthlyExpenses = new Array(12).fill(0);

    for (const expense of expenses) {
      const month = new Date(expense.date).getMonth(); // Get the month index (0-based)
      monthlyExpenses[month] += expense.amount;
    }

    return monthlyExpenses;
  };

  return (
    <div>
      <Bar data={data} options={options} />
    </div>
  );
};

export default ExpensesChart;
