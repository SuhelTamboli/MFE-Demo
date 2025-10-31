import React from "react";
import styles from "./Spinner.module.css";

const Spinner = ({ text = "Loading..." }) => {
  return (
    <div className={styles["host-app-spinner-container"]}>
      <div className={styles["host-app-spinner"]}></div>
      <p className={styles["host-app-spinner-text"]}>{text}</p>
    </div>
  );
};

export default Spinner;
