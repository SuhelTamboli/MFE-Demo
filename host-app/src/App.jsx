import { Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home/Home";
import About from "./components/About/About";

const RemoteWidgetApp = lazy(() => import("remote/WidgetApp"));

function App() {
  return (
    <div>
      <h1>Host App</h1>
      <BrowserRouter>
        {/* Host navigation */}
        <nav style={{ marginBottom: "1rem" }}>
          <Link to="/" style={{ marginRight: "1rem" }}>
            Host Home
          </Link>
          <Link to="/about" style={{ marginRight: "1rem" }}>
            Host About
          </Link>
          <Link to="/remote/widget">Remote Widget</Link>
        </nav>

        <Suspense fallback={<div>Loading remote…</div>}>
          <Routes>
            {/* 1. Host pages */}
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />

            {/* 2. Mount the whole remote under /remote */}
            <Route
              path="/remote/*" // <-- catch /remote, /remote/widget, …
              element={<RemoteWidgetApp />}
            />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </div>
  );
}

export default App;
