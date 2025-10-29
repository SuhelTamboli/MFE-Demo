import styles from "./Widget.module.css";

export default function Widget() {
  return (
    <div className={styles.container}>
      <h2>First MFE Widget</h2>
      <p>
        This component is styled with CSS Modules and exposed via Module
        Federation.
      </p>
    </div>
  );
}
