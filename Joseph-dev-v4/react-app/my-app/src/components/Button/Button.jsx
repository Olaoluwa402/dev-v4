import React from "react";

import styles from "./Button.module.css";

const Button = ({ color, bgColor, text }) => {
  return (
    <button
      className={styles.btn}
      style={{ color: color, backgroundColor: bgColor }}
    >
      {text ? text : "Login"}
    </button>
  );
};

export default Button;
