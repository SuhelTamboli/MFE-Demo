import React, { useState } from "react";
import styles from "./SignIn.module.css";
import { Link } from "react-router-dom";

const SignIn = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};

    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Enter a valid email address";
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
    setFormData({ ...formData, [e.target.id]: e.target.value });
    setErrors({ ...errors, [e.target.id]: "" }); // Clear error on change
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log("Form submitted:", formData);
      // Proceed with actual submission logic
    }
  };

  return (
    <div className={styles["signin-wrapper"]}>
      <div className={styles["signin-card"]}>
        <h4 className={styles["signin-title"]}>SignIn</h4>
        <form
          className={styles["signin-form-container"]}
          onSubmit={handleSubmit}
        >
          <div className={styles["signin-fields-container"]}>
            <label htmlFor="email">
              Email
              <span className={styles["signin-fields-required"]}>*</span>
            </label>
            <input
              id="email"
              type="email"
              placeholder="Type Email"
              value={formData.email}
              onChange={handleChange}
            />
            {errors.email && (
              <p className={styles["signin-fields-error"]}>{errors.email}</p>
            )}
          </div>

          <div className={styles["signin-fields-container"]}>
            <label htmlFor="password">
              Password
              <span className={styles["signin-fields-required"]}>*</span>
            </label>
            <input
              id="password"
              type="password"
              placeholder="Type Password"
              value={formData.password}
              onChange={handleChange}
            />
            {errors.password && (
              <p className={styles["signin-fields-error"]}>{errors.password}</p>
            )}
          </div>

          <button type="submit" className={styles["signin-submit-button"]}>
            Submit
          </button>
          <div className={styles["signin-footer"]}>
            <p>
              Don’t have an account? <Link to="../signup">Sign Up here</Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
