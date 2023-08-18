import React from "react";
import { BsSearch, BsPlusCircleFill } from "react-icons/bs";
import{FaBars} from "react-icons/fa"
import styles from "./Nav.module.css";

const Nav = () => {
    const searchStyle = {       
        fontSize: '22px',
        paddingTop: '5px'
      };

      const barStyle = {
        fontSize: '20px',
        display: 'none'
      }

  return (
    <div>
      <nav className={styles.nav}>
        <div className={styles.nav_right}>
          {/* <h2>Exclusive</h2> */}
          <img src="./e-images/xclusive.jpeg" alt="" />
        </div>

        <div className={styles.nav_middle}>
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
        </div>

        <div className={styles.nav_right}>
          <div className={styles.search_container}>
            <input
              type="text"
              className={styles.search_input}
              placeholder="what are you looking for?"
            />
            <button className={styles.search_button}>
              <BsSearch style={searchStyle}/>
            </button>
          </div>
        </div>

        <div className={styles.logos}>
          <img src="./e-images/Vector.svg" alt="" />
          <img src="./e-images/Cart1 with buy.svg" alt="" id="myBtn" />
          <img src="./e-images/user.svg" alt="" />
          <BsPlusCircleFill fontSize={"25px"} />
          <FaBars style={barStyle}/>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
