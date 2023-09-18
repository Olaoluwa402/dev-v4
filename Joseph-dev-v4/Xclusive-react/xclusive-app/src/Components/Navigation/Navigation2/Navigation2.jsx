import React from "react";
import styles from "./Navigation2.module.css";
import { Link } from "react-router-dom";





const Navigation = () => {

  return (
    <div className={styles.nav_bar}>
      <div className={styles.nav_logo}>
         <img src="https://res.cloudinary.com/dfeyofjln/image/upload/v1692172726/2OC_logo-removebg-preview_q75nqy.png"></img>
      </div>
      <ul className={styles.nav_ul}>
        <li> <Link to={"/"}>Home</Link></li>
        <li> <a href="/">Contact</a></li>
        <li> <Link to={"/about"}>About</Link></li>
        <li> <Link to={"/signup"}>Sign Up</Link></li>
      </ul>
      <div className={styles.nav_search}>
        <input type="search" id="search" placeholder="What are you looking for?" />
        <a href="/">
          <img src="https://res.cloudinary.com/dfeyofjln/image/upload/v1692172726/Component_2_iaomsx.png" alt="Search"/>
        </a>
      </div>
      {/* <div className={styles.nav_images}>
      <div className={styles.nav_images}>
        <div id={styles.favourite} className="relative">
          <a href="/">
            <img src="https://res.cloudinary.com/dfeyofjln/image/upload/v1692172730/Wishlist_1_ka87pn.png" alt="Wishlist" />
          </a>
        </div>
        <div id={styles.buy_cart} className="relative">

            <img src="https://res.cloudinary.com/dfeyofjln/image/upload/v1692171622/Cart1_with_buy_uri7s5.png" alt="Cart" />
    
        </div>
          <img src="https://res.cloudinary.com/dfeyofjln/image/upload/v1692172730/user_tx8xws.png" alt="User" />
      </div>
      </div> */}
    
    </div>
  );
};

export default Navigation;