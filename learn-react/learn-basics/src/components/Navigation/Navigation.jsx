import React from "react";
import { FaUserAlt, FaSearchengin } from "react-icons/fa";
import { BsSearchHeart } from "react-icons/bs";
import styles from "./Navigation.module.css";

const Navigation = ({ title }) => {
  console.log(title);
  return (
    <nav className={`${styles.container} container`}>
      <a href="/">LOGO</a>
      <ul>
        <li>
          <FaUserAlt />
          <a href="/">Home</a>
        </li>
        <li>
          <FaSearchengin />
          <a href="/">About</a>
        </li>
        <li>
          <BsSearchHeart />
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
