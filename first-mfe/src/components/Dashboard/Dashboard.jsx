import React from "react";
import BarChart from "../Charts/BarChart/BarChart";
import PieChart from "../Charts/PieChart/PieChart";
import LineChart from "../Charts/LineChart/LineChart";
import styles from "./Dashboard.module.css";
import MapView from "../Maps/MapView";

const Dashboard = () => {
  return (
    <div className={styles["dashboard-container"]}>
      <div className={styles["dashboard-title"]}>Expense Overview</div>
      <div className={styles["chart-grid"]}>
          <BarChart />
          <PieChart />
          <LineChart />
          <MapView />
      </div>
    </div>
  );
};

export default Dashboard;
