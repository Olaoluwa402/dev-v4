import React from 'react'
import styles from './Footer.module.css'
import { Link } from 'react-router-dom'
const Footer = () => {
  return (
    <div className={styles.footer}>
        <div className={styles.footer_inner}>
            <div className={styles.exclusive}>
                <div>
                    <h3>Exclusive</h3>
                    <h4>Subscribe</h4>
                    <h5>Get 10% off your first order</h5>
                </div>
                <div id={styles.email}>
                    <input type="email" id="email" placeholder="Enter your email" />
                    <a href="#"><img src="https://res.cloudinary.com/dfeyofjln/image/upload/v1692172728/icon-send_p4fahi.png" /></a>
                </div>
            </div>

            <div className={styles.support}>
                <h4>Support</h4>
                <h5>111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.</h5>
                <h5>exclusive@gmail.com</h5>
                <h5>+88015-88888-9999</h5>
            </div>

            <div className={styles.account}>
                <h4>Account</h4>
                <a href="#">
                    <h5>My Account</h5>
                </a>
                <a href="#">
                    <h5>Login / Register</h5>
                </a>
                <a href="#">
                    <h5>Cart</h5>
                </a>
                <Link to={"/wishlist"}><h5>Wishlist</h5></Link>
                <a href="#">
                    <h5>Shop</h5>
                </a>
            </div>
            <div className={styles.quick}>
                <h4>Quick Link</h4>
                <a href="#">
                    <h5>Privacy Policy</h5>
                </a>
                <a href="#">
                    <h5>Terms Of Use</h5>
                </a>
                <a href="#">
                    <h5>FAQ</h5>
                </a>
                <a href="#">
                    <h5>Contact</h5>
                </a>
                <Link to={"/colour"}>
                    <h5>Colours</h5>
                </Link>
            </div>

            <div className={styles.app}>
                <h4>Download App</h4>
                <a href="#">
                    <h6>Save $3 with App New User Only</h6>
                </a>
                <div className={styles.app2}>
                    <div id="qr">
                        <a href="#"> <img src="https://res.cloudinary.com/dfeyofjln/image/upload/v1692172729/Qr_Code_x10uek.png" /></a>
                    </div>
                    <div class="stores">
                        <a href="#"><img src="https://res.cloudinary.com/dfeyofjln/image/upload/v1692172727/GooglePlay_gh4boq.png" /></a>
                        <a href="#"><img src="https://res.cloudinary.com/dfeyofjln/image/upload/v1692172726/AppStore_ceb5xb.png" /></a>
                    </div>
                </div>
                <ul>
                    <li>
                        <a href="#"><img src="https://res.cloudinary.com/dfeyofjln/image/upload/v1692172728/Icon-Facebook_dm3uwl.png" /></a>
                    </li>
                    <li>
                        <a href="#"><img src="https://res.cloudinary.com/dfeyofjln/image/upload/v1692172727/Group_juq5pt.png" /></a>
                    </li>
                    <li>
                        <a href="#"><img src="https://res.cloudinary.com/dfeyofjln/image/upload/v1692172727/Group_1_nut68i.png" /></a>
                    </li>
                    <li>
                        <a href="#"><img src="https://res.cloudinary.com/dfeyofjln/image/upload/v1692172728/Icon-Linkedin_zz0bhm.png" /></a>
                    </li>
                </ul>
            </div>
        </div>
        <div id={styles.footer2}>
            <div className={styles.copyright}>
            <img src="https://res.cloudinary.com/dfeyofjln/image/upload/v1692172727/Group_2_hnlszf.png" /></div>
            <h5>Copyright Rimel 2022. All right reserved</h5>
        </div>
    </div>

    
  )
}

export default Footer