import React from "react";
import styles from "./Contact.module.css";
import { Link } from "react-router-dom";
import { GoMail } from "react-icons/go";
import { BsTelephone } from "react-icons/bs";

function Contact() {
  return (
    <div>
       <div className={styles.spann}>
          <span >Home / </span>
          <span>Contact</span>
        </div>
      <div className={styles.container}>
        <div className={styles.left}>
        <div className={styles.call}>
          <div className={styles.calls}>
            {" "}
            <BsTelephone className={styles.phone} />
          </div>
          <h3>Call to Us</h3>
        </div>
        <p>We are available 24/7, 7 days a week.</p>
        <div className={styles.b}>
          <Link to="+2347060422154"> Phone: +8801611112222</Link>
        </div>
        <hr />
        <div className={styles.call}>
          <div className={styles.calls}>
            <GoMail className={styles.phone} />{" "}
          </div>
          <h3>Call to Us</h3>
        </div>
        <p>Fill out our form and we will contact you within 24 hours.</p>
        <div className={styles.b}>
          <Link to="support@exclusive.com">Emails: support@exclusive.com</Link>
        </div>
        <div className={styles.b}>
          <Link to="customer@exclusive.com">
            Emails: customer@exclusive.com
          </Link>
        </div>
        </div>
        <div className={styles.right}>
          <div className={styles.inner_right}>
            <input type="text" name="fullName" placeholder="Your Name" />

            <input type="text" name="fullName" placeholder="Your Email " />

            <input type="Number" name="fullName" placeholder="Your Phone" />
          </div>
          <div className={styles.msg}>
        <textarea
          rows="14"
          cols="50" 
          placeholder="Your Message"
        />

          </div>
          <button>Send Message</button>
        </div>
      </div>
     
    </div>
  );
}

export default Contact;
