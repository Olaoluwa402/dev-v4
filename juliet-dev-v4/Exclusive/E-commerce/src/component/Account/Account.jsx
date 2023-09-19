import React from "react";
import styles from "./Account.module.css";
import { Link } from "react-router-dom";

function Account() {
  return (
    <>
      <div className={styles.Account}>
        <div className={styles.span_flexed}>
          <div className={styles.spann}>
            <Link to="/">
              <span className={styles.spann1}> Back to Home</span>
            </Link>
            <span>/</span>
            <span className={styles.spann2}>Contact</span>
          </div>

          <div className={styles.spans}>
            <p className={styles.spans1}>Welcome! </p>
            <p className={styles.spans2}>Guest</p>
          </div>
        </div>
      </div>

      <div className={styles.wrapper}>
        <div className={styles.left}>
          <h3>Manage My Account</h3>
          <p>Profile</p>
          <ul>
            <li>
              <a href="/">Address Book</a>
            </li>
            <li>
              <a href="/">My payment Option</a>
            </li>
          </ul>

          <h3>My Orderst</h3>
          <ul>
            <li>
              <a href="/">My Orders</a>
            </li>
            <li>
              <a href="/">My Cancellation</a>
            </li>
          </ul>
          <h3>My Wishlist</h3>
        </div>
        <div className={styles.right}>
         <div>
         <label htmlFor="First Name"> First Name:
            <input type="text" />
          </label>
    
          <label htmlFor="Last Name"> Last Name:
            <input type="text" />
          </label>
         </div>

        <div>
        <label htmlFor="Email"> Email:
            <input type="email" />
          </label>

          <label htmlFor="Address"> Address:
            <input type="text" />
          </label>
        </div>

          <div>
            <p>Password Changes</p>
          </div>
            <input type="password"  placeholder="Current Password"/>
            <input type="password"  placeholder="New Password"/>
            <input type="password"  placeholder="Confirm New Password"/>
            <div>
              <p>cancel</p>
            <button>Save changes</button>
            </div>
            

        </div>
      </div>
    </>
  );
}

export default Account;
