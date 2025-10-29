import React, { useState } from "react";
import styles from "./SignUp.module.css";

const SignUp = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};

    if (!formData.username.trim()) {
      newErrors.username = "Username is required";
    }

    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(formData.email)) {
      newErrors.email = "Invalid email format";
    }

    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log("Form submitted:", formData);
      // Proceed with signup logic
    }
  };

  return (
    <div className={styles["signup-wrapper"]}>
      <div className={styles["signup-card"]}>
        <h4 className={styles["signup-title"]}>signup</h4>
        <form
          className={styles["signup-form-container"]}
          onSubmit={handleSubmit}
        >
          <div className={styles["signup-fields-container"]}>
            <label htmlFor="username">
              Username
              <span className={styles["signup-fields-required"]}>*</span>
            </label>
            <input
              id="username"
              name="username" // ✅ Add this
              type="text"
              placeholder="Type Username"
              value={formData.username}
              onChange={handleChange}
            />
            {errors.username && (
              <p className={styles["signup-fields-error"]}>{errors.username}</p>
            )}
          </div>
          <div className={styles["signup-fields-container"]}>
            <label htmlFor="email">
              Email
              <span className={styles["signup-fields-required"]}>*</span>
            </label>
            <input
              id="email"
              name="email" // ✅ Add this
              type="email"
              placeholder="Type Email"
              value={formData.email}
              onChange={handleChange}
              className={styles.input}
            />
            {errors.email && (
              <p className={styles["signup-fields-error"]}>{errors.email}</p>
            )}
          </div>
          <div className={styles["signup-fields-container"]}>
            <label htmlFor="password">
              Password
              <span className={styles["signup-fields-required"]}>*</span>
            </label>
            <input
              id="password"
              name="password" // ✅ Add this
              type="password"
              placeholder="Type Password"
              value={formData.password}
              onChange={handleChange}
            />
            {errors.password && (
              <p className={styles["signup-fields-error"]}>{errors.password}</p>
            )}
          </div>
          <button type="submit" className={styles["signup-submit-button"]}>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
