import React from "react";
import { FaUserAlt, FaSearchengin, FaShopify } from "react-icons/fa";
import { MdOutlineFavorite } from "react-icons/md";
import { BsSearchHeart } from "react-icons/bs";
import { NavLink } from "react-router-dom";
import styles from "./Navigation.module.css";

const Navigation = ({ title }) => {
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
            <NavLink to="/register">Register</NavLink>
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
