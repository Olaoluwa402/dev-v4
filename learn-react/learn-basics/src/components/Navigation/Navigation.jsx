import React, { useContext } from "react";
import { FaUserAlt, FaSearchengin, FaShopify } from "react-icons/fa";
import { MdOutlineFavorite } from "react-icons/md";
import { BsSearchHeart } from "react-icons/bs";
import { GlobalContext } from "../../context";
import { NavLink } from "react-router-dom";
import styles from "./Navigation.module.css";

const Navigation = ({ title }) => {
  const { cartTotal, favoritesTotal } = useContext(GlobalContext);

  console.log(cartTotal, "cartTotal");
  return (
    <nav className={styles.wrapper}>
      <div className={`${styles.container} container `}>
        <NavLink to="/">LOGO</NavLink>
        <ul>
          <li>
            {/* <FaUserAlt /> */}
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            {/* <FaSearchengin /> */}
            <NavLink to="/about">About</NavLink>
          </li>
          <li>
            <NavLink to="/shop">Shop</NavLink>
          </li>
          <li>
            <div style={{ position: "relative" }}>
              <NavLink to="/cart">
                <FaShopify />
              </NavLink>
              <div className={styles.cartTotal}>{cartTotal}</div>
            </div>
          </li>

          <li>
            <div style={{ position: "relative" }}>
              <NavLink to="/favorites">
                <MdOutlineFavorite />
              </NavLink>
              <div className={styles.cartTotal}>{favoritesTotal}</div>
            </div>
          </li>
          <li>
            {/* <BsSearchHeart /> */}
            <a href="/">Contact</a>
          </li>
          <li>
            <NavLink to="/dashboard">Dashboard</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
