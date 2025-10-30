import { Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Header from "./components/Header/Header";
import styles from "./App.module.css";
import Footer from "./components/Footer/Footer";

const FirstMfeWidgetApp = lazy(() => import("firstMFE/WidgetApp"));
const SecondMfeFormApp = lazy(() => import("auth/AuthApp"));

function App() {
  return (
    <div className={styles["host-app-container"]}>
      <BrowserRouter>
        <Header />
        <main className={styles["host-app-main-body-container"]}>
          <Routes>
            {/* 1. Host App pages */}
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
            {/* 2. Mount the whole auth MFE under /auth */}
            <Route
              path="/auth/*" // <-- catch /auth, /auth/widget, …
              element={
                <Suspense fallback={<div>Loading auth MFE Form</div>}>
                  <SecondMfeFormApp />
                </Suspense>
              }
            />
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
