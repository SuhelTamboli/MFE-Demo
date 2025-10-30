import React from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend, Title } from "chart.js";
import styles from "./PieChart.module.css"; // Import CSS module

// Register necessary Chart.js components
ChartJS.register(ArcElement, Tooltip, Legend, Title);

const chartData = {
  labels: ["Salaries", "Marketing", "Operations", "R&D", "Office Rent"],
  datasets: [
    {
      label: "Q3 Expenses",
      data: [45, 20, 15, 10, 10], // percentages
      backgroundColor: [
        "rgba(255, 99, 132, 0.6)",
        "rgba(54, 162, 235, 0.6)",
        "rgba(255, 206, 86, 0.6)",
        "rgba(75, 192, 192, 0.6)",
        "rgba(153, 102, 255, 0.6)",
      ],
      borderColor: [
        "rgba(255, 99, 132, 1)",
        "rgba(54, 162, 235, 1)",
        "rgba(255, 206, 86, 1)",
        "rgba(75, 192, 192, 1)",
        "rgba(153, 102, 255, 1)",
      ],
      borderWidth: 1,
    },
  ],
};

const chartOptions = {
  responsive: true,
  plugins: {
    legend: { position: "right" },
    title: {
      display: true,
      text: "Company Expense Distribution - Q3 2025",
    },
  },
};

const PieChart = () => {
  return (
    <div className={styles["pie-chart-card"]}>
      <Pie data={chartData} options={chartOptions} />
    </div>
  );
};

export default PieChart;
