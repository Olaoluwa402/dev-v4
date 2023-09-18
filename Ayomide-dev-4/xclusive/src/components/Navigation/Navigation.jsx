import React from "react";
import styles from "./Navigation.module.css";
import { AiOutlineHeart, AiOutlinePlus } from "react-icons/ai";
import { GrCart } from "react-icons/gr";
import { FiUser } from "react-icons/fi";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <div>
      <header>
        <p>
          Summer Sale for All swim suits and free express Delivery- OFF 50%!
          <a href="#" style={{ color: "white" }}>
            Shop Now
          </a>
        </p>
        <select name="" id={styles.navselect}>
          <option value="">English</option>
          <option value="">Mandarin</option>
          <option value="">French</option>
        </select>
      </header>
      <navbar>
        <b>Exclusive</b>
        <ul className={styles.navhome}>
          <NavLink to="/">
            <li>Home</li>
          </NavLink>
          <NavLink to="/Contact">
            <li>Contact</li>
          </NavLink>
          <NavLink to="/About">
            <li>About</li>
          </NavLink>
          <NavLink to="/signup">
            <li>Sign Up</li>
          </NavLink>
        </ul>
        {/* <!-- <i class="fa-solid fa-bars" id="hamburger-icon"></i> --> */}
        <div className={styles.searchcontainer}>
          <input
            id="searchid"
            type="text"
            placeholder="What are you looking for?"
          />
          <div className="fav">
            <div id="heart" className={styles.relative}>
              <AiOutlineHeart />
            </div>
          </div>
          <div id="carty" className="relative">
            <div className="piccart">
              <GrCart />
            </div>
          </div>
          <FiUser />
          <div className="addproductbtn">
            <AiOutlinePlus />
          </div>
        </div>
        {/* <!-- <div id="menubar">
        <a href="#"><img src="./Exclusive Assets/menu.png" alt="menu bar" /></a>
        </div> -->
        <!-- <div class="cart"> --> */}
      </navbar>
    </div>
  );
};

export default Navigation;
