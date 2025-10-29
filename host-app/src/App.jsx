import { Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home/Home";
import About from "./components/About/About";

const FirstMfeWidgetApp = lazy(() => import("firstMFE/WidgetApp"));
const SecondMfeFormApp = lazy(() => import("secondMFE/FormApp"));

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
          <Link to="/firstMfe/widget">first MFE Widget</Link>
          <Link to="/secondMfe/signup">second MFE Form</Link>
        </nav>

        <Routes>
          {/* 1. Host pages */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />

          {/* 2. Mount the whole first MFE under /firstMfe */}
          <Route
            path="/firstMfe/*" // <-- catch /firstMfe, /firstMfe/widget, …
            element={
              <Suspense fallback={<div>Loading first MFE Widget…</div>}>
                <FirstMfeWidgetApp />
              </Suspense>
            }
          />

          {/* 2. Mount the whole second MFE under /firstMfe */}
          <Route
            path="/secondMfe/*" // <-- catch /secondMfe, /secondMfe/widget, …
            element={
              <Suspense fallback={<div>Loading second MFE Form…</div>}>
                <SecondMfeFormApp />
              </Suspense>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
