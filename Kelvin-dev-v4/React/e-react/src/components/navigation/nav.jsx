import React from "react";
import styles from "./nav.module.css";
import { BsCart3, BsHeart, BsSearch } from "react-icons/bs";
import { FiUser } from "react-icons/fi";
import { AiOutlineMenu } from "react-icons/ai";
import { NavLink } from "react-router-dom";

function Nav() {
  return (
    <div>
      <div className={styles.topAd}>
        <p>
          Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
          <span>ShopNow</span>
        </p>
        <select name="" className={styles.select}>
          <option value="">English</option>
          <option value="">French</option>
          <option value="">Japanese</option>
        </select>
      </div>

      {/* navbar start */}
      <nav>
        <NavLink to="/">
          <img
            src="../Assets/lodo black.png"
            alt=""
            className={styles.navlogo}
          />
        </NavLink>
        <AiOutlineMenu className={styles.hamburger_icon} id="hamburger_icon" />

        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>Contact</li>
          <li>About</li>
          <li>
            <NavLink to="/accountscreen">Sign Up</NavLink>
          </li>
        </ul>
        <div>
          <div className={styles.searchDiv}>
            <input type="search" placeholder="What are you looking for?" />
            <BsSearch className={styles.nav_search_icon} />
          </div>

          <BsHeart className={styles.i} />
          <BsCart3 className={styles.i} id="navCartId" />
          <NavLink to="/loginscreen">
            <FiUser className={styles.userIcon} id="user_icon" />
          </NavLink>
        </div>
      </nav>
      {/* navbar end */}

      {/* mobile nav */}
      <div className={`${styles.mobilenav} menuclose`} id="mobilenav">
        <ul>
          <li>Home</li>
          <li>Contact</li>
          <li>About</li>
          <li>Sign Up</li>
        </ul>

        <div>
          <div className={styles.searchDiv}>
            <input type="search" placeholder="What are you looking for?" />

            <BsSearch className={styles.nav_search_icon} />
          </div>

          <div id={styles.mobilenavIcons}>
            <BsHeart className={styles.i} />
            <BsCart3 className={styles.i} id="navCartIdMobile" />
            <img
              src="../Assets/user.png"
              alt=""
              className={styles.userIconMobile}
              id="user_icon_mobile"
            />
          </div>
        </div>
      </div>
      {/* mobile nav  */}
    </div>
  );
}

console.log(document.getElementById("mobilenav"));

export default Nav;
