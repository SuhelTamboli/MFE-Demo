import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <p>This is Dashboard MFE app home</p>
      <Link to="/">Home</Link>
      <Link to="/fulldashboard">Full Dashboard</Link>
      <Link to="/barchart">Bar Chart</Link>
      <Link to="/piechart">Pie Chart</Link>
      <Link to="/linechart">Line Chart</Link>
      <Link to="/mapview">Map View</Link>
    </div>
  );
};

export default Home;
