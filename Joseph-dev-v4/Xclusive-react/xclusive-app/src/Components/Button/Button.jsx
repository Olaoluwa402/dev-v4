import React from "react";

import styles from "./Button.module.css";
import { Link } from "react-router-dom";

const Button = ({ color, bgColor, text }) => {
  return (
    <button
      className={styles.btn}
      style={{ color: color, backgroundColor: bgColor }}
    >
      {text ? text : "submit"}
    </button>
  );
};

export default Button;
