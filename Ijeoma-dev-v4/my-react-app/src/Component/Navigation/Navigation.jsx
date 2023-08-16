import React from "react";

import styles from "./Navigation.css";

const Navigation = () => {
  return (
    
    <nav className={`${styles.container} container`}>
      <a href="/">LOGO</a>
      <ul>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/">About</a>
        </li>
        <li>
          <a href="/">Contact</a>
        </li>
        <li>
          <a href="/">Apps</a>
        </li>
      </ul>
    </nav>
    
  );
};

export default Navigation;
