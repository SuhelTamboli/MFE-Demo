import styles from "./Header.module.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className={styles["host-app-header-container"]}>
      <Link to="/">
        <h3 className={styles["host-app-header-name"]}>Host App</h3>
      </Link>
      <Link to="dashboard/fulldashboard">
        <button className={styles["host-app-header-login-button"]}>
          Dashboard
        </button>
      </Link>
      <Link to="auth/signin">
        <button className={styles["host-app-header-login-button"]}>
          Login
        </button>
      </Link>
    </div>
  );
};

export default Header;
