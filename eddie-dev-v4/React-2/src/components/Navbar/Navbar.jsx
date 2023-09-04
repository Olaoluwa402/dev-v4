import React from "react";
import { NavLink } from "react-router-dom";

import styles from "./Navbar.module.css";
import {AiOutlineHeart, AiOutlinePlus} from "react-icons/ai"
import {GrCart} from "react-icons/gr"
import {FiUser} from "react-icons/fi"

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
          <option value="">Espanol</option>
          <option value="">French</option>
        </select>
      </header>
      

          <nav className={styles.nav }>
            <ul>
              <li><NavLink to="/">Home</NavLink></li>
              <li><NavLink to="/about">about</NavLink></li>
              <li><NavLink to="/contact">contact</NavLink></li>
              <li><NavLink to="/signup">signup</NavLink></li>
              <li><NavLink to="/dashboard">dashboard</NavLink></li>
    
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
             < AiOutlineHeart/>
              </div>
            </div>
            <div id="carty" className="relative">
              <div className="piccart">
                <GrCart/>
              </div>
            </div>
            <FiUser/>
            <div className="addproductbtn">
             <AiOutlinePlus/>
            </div>
        </div>
        </nav>
        {/* <!-- <div id="menubar">
        <a href="#"><img src="./Exclusive Assets/menu.png" alt="menu bar" /></a>
        </div> -->
        <!-- <div class="cart"> --> */}
      
    </div>
  );
};

export default Navigation;
