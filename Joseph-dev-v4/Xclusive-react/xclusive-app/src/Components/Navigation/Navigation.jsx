import React from "react";
import styles from "./Navigation.module.css";
import {AiOutlinePlus} from "react-icons/ai"
import { Link } from "react-router-dom";
import Carticon from "./Carticon/Carticon";
import Favourite from "./Favourite/Favourite"
import User from "./User/User";
import Plus from "./Plus/Plus";




const Navigation = () => {

  return (
    <div className={styles.nav_bar}>
      <div className={styles.nav_logo}>
         <img src="https://res.cloudinary.com/dfeyofjln/image/upload/v1692172726/2OC_logo-removebg-preview_q75nqy.png"></img>
      </div>
      <ul className={styles.nav_ul}>
        <li> <Link to={"/"}>Home</Link></li>
        <li> <Link to={"/contact"}>Contact</Link></li>
        <li> <Link to={"/about"}>About</Link></li>
        <li> <Link to={"/signup"}>Sign Up</Link></li>
      </ul>
      <div className={styles.nav_search}>
        <input type="search" id="search" placeholder="What are you looking for?" />
        <a href="/">
          <img src="https://res.cloudinary.com/dfeyofjln/image/upload/v1692172726/Component_2_iaomsx.png" alt="Search"/>
        </a>
      </div>
      <div className={styles.nav_images}>
        <Favourite/>
        <Carticon/>
        <User/>
        <Plus/>
      </div>
    
    </div>
  );
};

export default Navigation;