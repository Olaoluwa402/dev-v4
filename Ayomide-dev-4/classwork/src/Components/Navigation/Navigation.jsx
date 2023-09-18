import React from "react";
import styles from "./Navigation.module.css";
import {NavLink} from 'react-router-dom'

const Navigation = () => {
  return (
    <div className={styles.container}>
      <div className={styles.container1}>
        <p>LOGO</p>
        <ul>
          <NavLink to="/">
            <li>Home</li>
          </NavLink>
          <NavLink to="/About">
            <li>About</li>
          </NavLink>
          <NavLink to="/Contact">
            <li>contact us</li>
          </NavLink>
          <NavLink to="/App">
            <li>App</li>
          </NavLink>
          <NavLink to="/Service">
            <li>Service</li>
          </NavLink>
        </ul>
      </div>
    </div>
  );
};

export default Navigation;
