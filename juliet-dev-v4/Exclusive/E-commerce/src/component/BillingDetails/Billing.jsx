import React from "react";
import styles from "./Billing.module.css";
import BillingImg from "../BillingImg/BillingImg";

function Billing() {
  return (
    <div className={styles.container}>
      <div className={styles.checkout_container}>
        <div className={styles.billing_info}>
          <div>
            <label>
              Full Name<span className={styles.star}>*</span>
              <input type="text" name="fullName" />
            </label>
          </div>

          <div>
            <label>
              Company Name
              <input type="text" name="fullName" />
            </label>
          </div>

          <div>
            <label>
              Street Address <span className={styles.star}>*</span>
              <input type="text" name="fullName" />
            </label>
          </div>

          <div>
            <label>
              Apartment, Floor, etc (optional)
              <input type="text" name="fullName" />
            </label>
          </div>

          <div>
            <label>
              Town / City<span className={styles.star}>*</span>
              <input type="text" name="fullName" />
            </label>
          </div>

          <div>
            <label>
              Phone Number<span className={styles.star}>*</span>
              <input type="Number" name="fullName" />
            </label>
          </div>

          <div>
            <label>
              Email<span className={styles.star}>*</span>
              <input type="email" name="email" />
            </label>
          </div>
        </div>

        <label className={styles.checkbox__label}>
          <input type="checkbox" />
          <span>Save this information for faster check-out next time</span>
        </label>
      </div>

      <div className={styles.bankDetails}>
        <div className={styles.wrapper_flexed}>
          <div className={styles.outer_flexed}>
            <div className={styles.inner_flexed}>
              <img src="./e-images/Gamepad-Cart-Small.svg" alt="" />
              <p>LCD Gamepad</p>
            </div>
            <p>$650</p>
          </div>

          <div className={styles.outer_flexed}>
            <div className={styles.inner_flexed}>
              <img src="./e-images/Monitor-Cart-Small.svg" alt="" />
              <p>H1 Gamepad</p>
            </div>
            <p>$1100</p>
          </div>
        </div>

        <div>
          <div className={styles.subtotal}>
            <p>Subtotal</p>
            <p>$1750</p>
          </div>
          <hr />
          <div className={styles.subtotal}>
            <p>Shipping</p>
            <p>Free</p>
          </div>
          <hr />
          <div className={styles.subtotal}>
            <p>Total</p>
            <p>$1750</p>
          </div>
        </div>

        <div className={styles.outer_flexed}>
          <label className={styles.checkbox__label}>
            <input type="checkbox" />
            <span>Bank </span>
          </label>
          <BillingImg />
        </div>

        <label className={styles.checkbox__label}>
          <input type="checkbox" />
          <span>Cash On Delivery </span>
        </label>

        <div className={styles.inner_check}>
          <input type="text" placeholder="Coupon Code" />
          <a href="/">
            <button>Apply Coupon</button>
          </a>
        </div>
        <button className={styles.btn}>Apply Coupon</button>
        <p>By clicking "Place Order," you agree to our Terms and Conditions.</p>
      </div>
    </div>
  );
}

export default Billing;
