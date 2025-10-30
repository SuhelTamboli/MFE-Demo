import { Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import Dashboard from "./components/Dashboard/Dashboard";
import BarChart from "./components/Charts/BarChart/BarChart";
import PieChart from "./components/Charts/PieChart/PieChart";
import LineChart from "./components/Charts/LineChart/LineChart";
import MapView from "./components/Maps/MapView";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/fulldashboard" element={<Dashboard />} />
        <Route path="/barchart" element={<BarChart />} />
        <Route path="/piechart" element={<PieChart />} />
        <Route path="/linechart" element={<LineChart />} />
        <Route path="/mapview" element={<MapView />} />
      </Routes>
    </div>
  );
}

export default App;
