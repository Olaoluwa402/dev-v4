import React from "react";
import styles from "./footer.module.css";

function Footer() {
  return (
    <div>
      {/* <!-- footer start --> */}
      <footer>
        <img src="../Assets/logo white.png" alt="" />
        <div className={styles.footer_grid}>
          <div>
            <h5>Subscribe</h5>
            <p>Get 10% off your first order</p>
            <div>
              <input type="email" placeholder="Enter your email" />
              <img
                src="../Assets/icon-send.png"
                alt=""
                className={styles.footer_email_submit}
              />
            </div>
          </div>

          <ul>
            <li className={styles.footer_list_head}>Support</li>
            <li>111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.</li>
            <li>exclusive@gmail.com</li>
            <li>+88015-88888-9999</li>
          </ul>

          <ul>
            <li className={styles.footer_list_head}>Account</li>
            <li>My Account</li>
            <li>Login / Register</li>
            <li>Cart</li>
            <li>Wishlist</li>
            <li>Shop</li>
          </ul>

          <ul>
            <li className={styles.footer_list_head}>Quick Link</li>
            <li>Privacy Policy</li>
            <li>Terms Of Use</li>
            <li>FAQ</li>
            <li>Contact</li>
          </ul>

          <div className={styles.footer_app_link}>
            <h4 className={styles.footer_list_head}>Download App</h4>
            <p>Save $3 with App New User Only</p>
            <div className={styles.footer_grid_link}>
              <img
                src="../Assets/wishlist-page-assets/wishlist-Qrcode 1.png"
                alt=""
                className={styles.footer_qr}
              />
              <img
                src="../Assets/wishlist-page-assets/wishlist-googleplay-img.png"
                alt=""
                className={styles.footer_gp}
              />
              <img
                src="../Assets/wishlist-page-assets/wishlist-appstore-img.png"
                alt=""
                className={styles.footer_as}
              />
            </div>
            {/* <div className="footer-sm-icons">
            <i class="fa-brands fa-facebook-f" style="color: #ffffff"></i>
            <i class="fa-brands fa-twitter" style="color: #ffffff"></i>
            <i class="fa-brands fa-instagram" style="color: #ffffff"></i>
            <i class="fa-brands fa-linkedin-in" style="color: #ffffff"></i>
          </div> */}
          </div>
        </div>
        <p className={styles.copyright_text}>
          <span>&copy</span> Copyright Rimel 2022. All right reserved
        </p>
      </footer>
      {/* <!-- footer end --> */}
    </div>
  );
}

export default Footer;
