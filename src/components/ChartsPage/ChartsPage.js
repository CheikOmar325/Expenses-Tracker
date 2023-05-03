import React, { useRef, useEffect, useContext } from 'react';
import { ExpensesContext } from '../../context/ExpensesContext';
import { Chart, PieController, ArcElement, Tooltip, Title } from 'chart.js';

const ChartsPage = () => {
  const chartRef = useRef(null);
  const { expenses } = useContext(ExpensesContext);

  useEffect(() => {
    if (chartRef && chartRef.current) {
      // Register the required chart types and controllers
      Chart.register(PieController, ArcElement, Tooltip, Title);

      const ctx = chartRef.current.getContext('2d');

      // Group expenses by category and sum their amounts
      const amountsByCategory = expenses.reduce((acc, expense) => {
        acc[expense.category] = (acc[expense.category] || 0) + expense.amount;
        return acc;
      }, {});

      const labels = Object.keys(amountsByCategory);
      const data = Object.values(amountsByCategory);

      const chart = new Chart(ctx, {
        type: 'pie',
        data: {
          labels: labels,
          datasets: [
            {
              data: data,
              backgroundColor: [
                'rgba(255, 99, 132, 0.8)',
                'rgba(54, 162, 235, 0.8)',
                'rgba(255, 206, 86, 0.8)',
                'rgba(75, 192, 192, 0.8)',
                'rgba(153, 102, 255, 0.8)',
                'rgba(255, 159, 64, 0.8)',
              ],
            },
          ],
        },
        options: {
          responsive: true,
          plugins: {
            title: {
              display: true,
              text: 'Expenses by Category',
            },
          },
        },
      });

      return () => {
        chart.destroy();
      };
    }
  }, [expenses]);

  return (
    <div>
      <canvas ref={chartRef}></canvas>
    </div>
  );
};

export default ChartsPage;
