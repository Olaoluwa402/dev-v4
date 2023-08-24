import React from "react";
import styles from "./Footer.module.css"

const Footer=()=>{
    return(
        <>
        <div className={styles.footer}>
            <div class={styles.foot_flexed}>
            <h3>Exclusive</h3>
            <ul>
              <li><a href="/">Subscribe</a></li>
              <li><a href="/">Get 10% off your first order</a></li>
            </ul>
            <div class={styles.nav_right}>
              <div class={styles.email_container}>
                <input
                  type="email"
                  class="search-buttons"
                  placeholder="Enter Your Email?"
                />
                <button class={styles.cursur_button}>
                  <img src="https://res.cloudinary.com/di9r3toow/image/upload/v1692189518/cursor_rxgglh.png" alt="" />
                </button>
              </div>
            </div>
          </div>
          <div class={styles.foot_flexed2}>
            <h4>Support</h4>
            <p>111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.</p>
            <a href="/">exclusive@gmail.com</a>
            <p>+88015-88888-9999</p>
          </div>
          <div class={styles.foot_flexed3}>
            <h4>Account</h4>
            <ul>
              <li><a href="/">My Account</a></li>
              <li><a href="/">Login / Register</a></li>
              <li><a href="/">Cart</a></li>
              <li><a href="/">Wishlist</a></li>
              <li><a href="/">Shop</a></li>
            </ul>
          </div>
          <div class= {styles.foot_flexed4}>
            <h4>Quick link</h4>
            <ul>
              <li><a href="/">Privacy Policy</a></li>
              <li><a href="/">Terms Of Use</a></li>
              <li><a href="/">FAQ</a></li>
              <li><a href="/">Contact</a></li>
            </ul>
          </div>
          <div class={styles.foot_flexed5}>
            <h3>Download App</h3>
            <span>Save $3 with App New User Only</span>
            <div class="inner-flexed">
              <div class="barcode">
                <img src="https://res.cloudinary.com/di9r3toow/image/upload/v1692189522/Qrcode_1_d5gbrd.png" alt=""/>
              </div>
              <div class={styles.app_download}>
              <a href="/"><img src="https://res.cloudinary.com/di9r3toow/image/upload/v1692189519/google-play_sp7rbo.png" alt=""/></a>
              <a href="/"><img src="https://res.cloudinary.com/di9r3toow/image/upload/v1692189518/appstore_bdjajw.png" alt=""/></a>
              </div>
            </div>
            <div class={styles.social_handles}>
              <a href="/"><img src="https://res.cloudinary.com/di9r3toow/image/upload/v1692189519/fb_mxtny4.png" alt=""/></a>
              <a href="/"><img src="https://res.cloudinary.com/di9r3toow/image/upload/v1692189522/twitter_i3btak.png" alt=""/></a>
              <a href="/"><img src="https://res.cloudinary.com/di9r3toow/image/upload/v1692189520/insta_ptwkbh.png" alt=""/></a>
              <a href="/"><img src="https://res.cloudinary.com/di9r3toow/image/upload/v1692189522/linkdn_x2es32.png" alt=""/></a>
            </div>
          </div>
        </div>
        <div class={styles.f_last}>
          <img src="" alt=""/>
          <p>Copyright Rimel 2022. All right reserved</p>
        </div>
        
        </>
    )
}

export default Footer