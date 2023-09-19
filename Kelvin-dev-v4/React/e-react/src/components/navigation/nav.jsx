import React, { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import styles from "./nav.module.css";
import { BsCart3, BsHeart, BsSearch } from "react-icons/bs";
import { FiUser } from "react-icons/fi";
import { AiOutlineMenu } from "react-icons/ai";
import { GlobalContext } from "../../context";

function Nav() {
  const [dropDown, setDropDown] = useState(false);
  const { cartLength, wishlistLength } = useContext(GlobalContext);
  // const mobileNavHandler = () => {};
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
        <AiOutlineMenu
          className={styles.hamburger_icon}
          id="hamburger_icon"
          onClick={() => setDropDown((prev) => !prev)}
        />

        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to={"/contact"}>Contact</NavLink>
          </li>
          <li>
            <NavLink to={"/about"}>About</NavLink>
          </li>
          <li>
            <NavLink to="/accountscreen">Sign Up</NavLink>
          </li>
        </ul>
        <div>
          <div className={styles.searchDiv}>
            <input type="search" placeholder="What are you looking for?" />
            <BsSearch className={styles.nav_search_icon} />
          </div>

          <NavLink to="/wishlist">
            <div className={styles.icon_container}>
              <BsHeart className={styles.i} id="navCartId" />
              <span className={styles.count}>{wishlistLength}</span>
            </div>
          </NavLink>
          <div className={styles.icon_container}>
            <BsCart3 className={styles.i} id="navCartId" />
            <span className={styles.count}>{cartLength}</span>
          </div>

          <NavLink to="/dashboard">
            <FiUser className={styles.userIcon} id="user_icon" />
          </NavLink>
        </div>
      </nav>
      {/* navbar end */}

      {/* mobile nav */}
      {dropDown && (
        <div
          className={`${styles.mobilenav} ${styles.menushow}`}
          id="mobilenav"
        >
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to={"/contact"}>Contact</NavLink>
            </li>
            <li>
              <NavLink to={"/about"}>About</NavLink>
            </li>
            <li>
              <NavLink to="/accountscreen">Sign Up</NavLink>
            </li>
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
      )}
      {/* mobile nav  */}
    </div>
  );
}

console.log(document.getElementById("mobilenav"));

export default Nav;
