import React from "react";
import styles from "./Navigation.module.css";


const Navigation = () => {
  return (
    <div className={styles["nav-bar"]}>
      <div className={styles["nav-logo"]}>
        <img src="https://res.cloudinary.com/dfeyofjln/image/upload/v1692172726/2OC_logo-removebg-preview_q75nqy.png" alt="Logo" />
      </div>
      <ul>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/">Contact</a>
        </li>
        <li>
          <a href="/">About</a>
        </li>
        <li>
          <a href="/">Sign Up</a>
        </li>
      </ul>
      <div className={styles["nav-search"]}>
        <input type="search" id="search" placeholder="What are you looking for?" />
        <a href="/">
          <img src="./Exclusive Assets/Component 2.png" alt="Search" />
        </a>
      </div>
      <div className={styles["nav-images"]}>
        <div id={styles["favourite"]} className="relative">
          <a href="/">
            <img src="./Exclusive Assets/Wishlist (1).png" alt="Wishlist" />
          </a>
          <div className="absolute top-5 right-0 w-5 h-5 rounded-full bg-red-600 justify-center items-center flex flex-row text-white text-xs">
            <span className={styles["favourite-count"]}>0</span>
          </div>
        </div>
        <div id={styles["buy-cart"]} className="relative">
          <a href="/">
            <img src="./Exclusive Assets/Cart1 with buy.png" alt="Cart" />
          </a>
          <div className="absolute top-5 right-0 w-5 h-5 rounded-full bg-red-600 justify-center items-center flex flex-row text-white text-xs">
            <span className={styles["cart-count"]}>1</span>
          </div>
        </div>
        <a href="/">
          <img src="./Exclusive Assets/user.png" alt="User" />
        </a>
        <div className={styles["add-product-btn"]}>
          {/* <FontAwesomeIcon icon={faPlus} /> */}
        </div>
      </div>
    </div>
  );
};

export default Navigation;

