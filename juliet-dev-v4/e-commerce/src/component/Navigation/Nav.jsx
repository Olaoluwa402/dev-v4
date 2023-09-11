import React from "react";
import { BsSearch, BsPlusCircleFill } from "react-icons/bs";
import { FaBars } from "react-icons/fa";
import styles from "./Nav.module.css";
import { Link } from "react-router-dom";

const Nav = ({Favourite, BuyCart, User}) => {
  const searchStyle = {
    fontSize: "22px",
    paddingTop: "5px",
  };


  return (
    <div className={styles.parent_div}>
      <nav className={styles.nav}>
        <div className={styles.nav_right}>
          {/* <h2>Exclusive</h2> */}
          <img src="./e-images/xclusive.jpeg" alt="" />
        </div>
        <div className={styles.navmiddle_end}>
          <div className={styles.nav_middle}>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/Contact">Contact</Link>
              </li>
              <li>
                <Link to="/About">About</Link>
              </li>
              <li>
                <Link to="/SignUp">SignUp</Link>
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
                <BsSearch style={searchStyle} />
              </button>
            </div>
          </div>

          <div className={styles.logos}>
          {Favourite && <Favourite />}
          {BuyCart && <BuyCart />}
          {User && <User />}
            
            
            <BsPlusCircleFill fontSize={"25px"} />
            {/* <FaBars style={barStyle} /> */}
          </div>
        </div>
        <FaBars className={styles.Bars} />
      </nav>
    </div>
  );
};

export default Nav;
