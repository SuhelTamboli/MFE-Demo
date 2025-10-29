import { Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import Widget from "./components/Widget/Widget";

function App() {
  return (
    <div>
      <h1>First MFE App</h1>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/widget" element={<Widget />} />
        </Routes>
    </div>
  );
}

export default App;
