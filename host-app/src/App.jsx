import { Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Header from "./components/Header/Header";
import styles from "./App.module.css";
import Footer from "./components/Footer/Footer";
import Spinner from "./components/Utilities/Spinner/Spinner";

const DashboardMfeApp = lazy(() => import("dashboard/DashboardApp"));
const AuthMfeApp = lazy(() => import("auth/AuthApp"));

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
            {/* 2. Mount the whole dashboard MFE under /dashboard */}
            <Route
              path="/dashboard/*" // <-- catch /dashboard, /dashboard/fulldashboard, …
              element={
                <Suspense
                  fallback={
                    <Spinner text="Loading Dashboard MFE – Full Dashboard..." />
                  }
                >
                  <DashboardMfeApp />
                </Suspense>
              }
            />
            {/* 2. Mount the whole auth MFE under /auth */}
            <Route
              path="/auth/*" // <-- catch /auth, /auth/signin, …
              element={
                <Suspense fallback={
                  <Spinner text="Loading auth MFE - Form..." />
                }>
                  <AuthMfeApp />
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
