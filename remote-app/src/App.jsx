import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import Widget from "./components/Widget/Widget";

function App() {
  return (
    <div>
      <h1>Remote App</h1>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/widget" element={<Widget />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
