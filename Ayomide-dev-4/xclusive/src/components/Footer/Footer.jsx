import React from "react";
import styles from "./Footer.module.css";
import { Link } from "react-router-dom";
import { BiLogoFacebook } from "react-icons/bi";
import { AiOutlineTwitter } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";

function Footer() {
  return (
    <div>
      <footer className={styles.footer}>
        <div className={styles.footer_flexed}>
          <div className={styles.foot_flexed}>
            <h3>Exclusive</h3>
            <ul>
              <li>
                <a href="/">Subscribe</a>
              </li>
              <li>
                <a href="/">Get 10% off your first order</a>
              </li>
            </ul>
            <div className={styles.nav_right}>
              <div className={styles.email_container}>
                <input
                  type="email"
                  className={styles.search_buttons}
                  placeholder="Enter Your Email?"
                />
                <button className={styles.cursur_button}>
                  <img src="./e-images/arrow.png" alt="" />
                </button>
              </div>
            </div>
          </div>
          {/* 4 */}
          <div className={styles.foot_flexed2}>
            <h4>Support</h4>
            <p>111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.</p>
            <a href="/">exclusive@gmail.com</a>
            <p>+88015-88888-9999</p>
          </div>
          <div className={styles.foot_flexed3}>
            <h4>Account</h4>
            <ul>
              <li>
                <a href="/">My Account</a>
              </li>

              <li>
                <Link to="/Login">Login / Register</Link>
              </li>

              <li>
                <Link to="/Cart">Cart</Link>
              </li>

              <li>
                <Link to="/HeroPage">wishlist</Link>
              </li>

              <li>
                <Link to={"/shop"}>Shop</Link>
              </li>
            </ul>
          </div>
          <div className={styles.foot_flexed3 /* 4 */}>
            <h4>Quick link</h4>
            <ul>
              <li>
                <a href="/">Privacy Policy</a>
              </li>
              <li>
                <a href="/">Terms Of Use</a>
              </li>
              <li>
                <a href="/">FAQ</a>
              </li>
              <li>
                <a href="/">Contact</a>
              </li>
            </ul>
          </div>
          <div className={styles.foot_flexed5}>
            <h3>Download App</h3>
            <span>Save $3 with App New User Only</span>
            <div className={styles.inner_flexed}>
              <div className={styles.barcode}>
                <img src="./e-images/Qrcode 1.png" alt="" />
              </div>
              <div className={styles.app_download}>
                <a href="/">
                  <img src="./e-images/google-play.png" alt="" />
                </a>
                <a href="/">
                  <img src="./e-images/appstore.png" alt="" />
                </a>
              </div>
            </div>
            <div className={styles.social_handles}>
              <a href="/">
                <BiLogoFacebook />
              </a>
              <a href="/">
                <img src="./e-images/twitter.png" alt="" />
              </a>
              <a href="/">
                <img src="./e-images/insta.png" alt="" />
              </a>
              <a href="/">
                <img src="./e-images/linkdn.png" alt="" />
              </a>
            </div>
          </div>
        </div>
        <div className={styles.f_last}>
          <img src="./e-images/logo.png" alt="" />
          <p>Copyright Rimel 2023. All right reserved</p>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
