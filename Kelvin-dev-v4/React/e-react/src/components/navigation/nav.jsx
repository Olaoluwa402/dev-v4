import React from "react";
import styles from "./nav.module.css";
import { BsCart3, BsHeart, BsSearch } from "react-icons/bs";
import { AiOutlineMenu } from "react-icons/ai";

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
        <img src="../Assets/lodo black.png" alt="" className={styles.navlogo} />
        <AiOutlineMenu className={styles.hamburger_icon} id="hamburger_icon" />

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

          <BsHeart className={styles.i} />
          <BsCart3 className={styles.i} id="navCartId" />
          <img
            src="../Assets/user.png"
            alt=""
            className={styles.userIcon}
            id="user_icon"
          />
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
