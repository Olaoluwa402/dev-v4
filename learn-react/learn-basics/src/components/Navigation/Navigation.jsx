import React from "react";
import { FaUserAlt, FaSearchengin } from "react-icons/fa";
import { BsSearchHeart } from "react-icons/bs";
import { NavLink } from "react-router-dom";
import styles from "./Navigation.module.css";

const Navigation = ({ title }) => {
  console.log(title);
  return (
    <nav className={styles.wrapper}>
      <div className={`${styles.container} container `}>
        <NavLink to="/">LOGO</NavLink>
        <ul>
          <li>
            {/* <FaUserAlt /> */}
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            {/* <FaSearchengin /> */}
            <NavLink to="/about">About</NavLink>
          </li>
          <li>
            <NavLink to="/shop">Shop</NavLink>
          </li>
          <li>
            {/* <BsSearchHeart /> */}
            <a href="/">Contact</a>
          </li>
          <li>
            <NavLink to="/dashboard">Dashboard</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
