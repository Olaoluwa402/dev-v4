import React from "react";

import styles from "./NavBar.module.css";
import { CiSearch } from "react-icons/ci";
import { HiUsers } from "react-icons/hi";
import { HiBell } from "react-icons/hi";

const NavBar = () => {
  return (
    <div className={styles.container}>
      
        <div className={styles.search}>
          <CiSearch className={styles.icons} />
        </div>
        <div className={styles.righticons}>
          <div>
            <HiUsers className={styles.icons} />
          </div>
          <div className="relative ">
            <HiBell className={styles.icons} />
            <div className="absolute top-0 right-0 w-2 h-2 rounded-full bg-green-600 justify-center items-center flex flex-row text-white text-xs"></div>
          </div>
          <div className={styles.userimage}>
            <img src="https://res.cloudinary.com/dfeyofjln/image/upload/v1693076837/Joseph-removebg-preview_vayj27.png" />
          </div>
        </div>
      
    </div>
  );
};

export default NavBar;
