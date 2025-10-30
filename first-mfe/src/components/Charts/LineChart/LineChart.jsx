import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import styles from "./LineChart.module.css";

ChartJS.register(
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend
);

const chartData = {
  labels: [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ],
  datasets: [
    {
      label: "Monthly Revenue (₹ in lakhs)",
      data: [12, 15, 18, 22, 25, 30, 35, 40, 38, 42, 45, 50],
      fill: false,
      borderColor: "rgba(75, 192, 192, 1)",
      backgroundColor: "rgba(75, 192, 192, 0.2)",
      tension: 0.3,
      pointRadius: 4,
      pointHoverRadius: 6,
    },
  ],
};

const chartOptions = {
  responsive: true,
  plugins: {
    legend: { position: "top" },
    title: {
      display: true,
      text: "Monthly Revenue Trend - 2025",
    },
  },
  scales: {
    y: {
      beginAtZero: true,
      title: {
        display: true,
        text: "Revenue (₹ lakhs)",
      },
    },
    x: {
      title: {
        display: true,
        text: "Month",
      },
    },
  },
};

const LineChart = () => {
  return (
    <div className={styles["line-chart-card"]}>
      <Line data={chartData} options={chartOptions} />
    </div>
  );
};

export default LineChart;
