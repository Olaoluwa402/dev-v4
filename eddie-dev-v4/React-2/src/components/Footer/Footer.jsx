import React from 'react'
import Style from './Footer.module.css'
import {BiLogoFacebook} from 'react-icons/bi';
import { AiOutlineTwitter } from 'react-icons/ai';
import {AiOutlineInstagram} from 'react-icons/ai';
import {AiFillLinkedin} from 'react-icons/ai';



const Footer = () => {
  return (
    <div>
        <footer>
        <div className={styles.footerflexed}>
          <div className={styles.footflexed}>
            <h3>Exclusive</h3>
            <ul>
              <li>
                <a href="#">Subscribe</a>
              </li>
              <li>
                <a href="#">Get 10% off your first order</a>
              </li>
            </ul>
            <div className={styles.navright}>
              <div className={styles.emailcontainer}>
                <input
                  type="email"
                  className={styles.searchbuttons}
                  placeholder="Enter Your Email?"
                />
                <button className={styles.cursurbutton}>
                  <img
                    src="../E-commerce/wishlist-asset/icon-send.png"
                    alt=""
                  />
                </button>
              </div>
            </div>
          </div>
          <div className={styles.footflexed2}>
            <h4>Support</h4>
            <p>111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.</p>
            <a href="#">exclusive@gmail.com</a>
            <p>+88015-88888-9999</p>
          </div>
          <div className={styles.footflexed3}>
            <h4>Account</h4>
            <ul>
              <li>
                <a href="#">My Account</a>
              </li>
              <li>
                <a href="#">Login / Register</a>
              </li>
              <li>
                <a href="#">Cart</a>
              </li>
              <li>
                <a href="#">Wishlist</a>
              </li>
              <li>
                <a href="#">Shop</a>
              </li>
            </ul>
          </div>
          <div className={styles.footflexed3footflexed4}>
            <h4>Quick link</h4>
            <ul>
              <li>
                <a href="#">Privacy Policy</a>
              </li>
              <li>
                <a href="#">Terms Of Use</a>
              </li>
              <li>
                <a href="#">FAQ</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
            </ul>
          </div>
          <div className={styles.footflexed5}>
            <h3>Download App</h3>
            <span>Save $3 with App New User Only</span>
            <div class="inner-flexed">
              <div class="barcode">
                <img src="../E-commerce/wishlist-asset/Qr Code.png" alt="" />
              </div>
              <div class="app-download">
                <a href="#">
                  <img
                    src="../E-commerce/wishlist-asset/GooglePlay.png"
                    alt=""
                  />
                </a>
                <a href="#">
                  <img src="../E-commerce/wishlist-asset/AppStore.png" alt="" />
                </a>
              </div>
            </div>
            <div className={styles.socialhandles}>
              <BiLogoFacebook/>
             <AiOutlineTwitter/>
             <AiOutlineInstagram/>
             <AiFillLinkedin/>
            </div>
          </div>
        </div>
        <div className={styles.flast}>
          <img src="../E-commerce/wishlist-asset/icon-copyright.png" alt="" />
          <p>Copyright Rimel 2022. All right reserved</p>
        </div>
      </footer>
    </div>
  )
}

export default Footer