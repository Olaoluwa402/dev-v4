import React from "react";
import { BsTelephone } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";

import styles from "./Contactus.module.css";

const Contactus = () => {
  const iconstyle = {
    color: "white",
    backgroundColor: "red",
    padding: "10px",
    borderRadius: "50%",
    overflow: "visible",
  };

  const iconstyle1 = {
    color: "white",
    backgroundColor: "red",
    padding: "10px",
    borderRadius: "50%",
    overflow: "visible",
  };

  return (
    <div className={styles.container}>
      <p className={styles.container1}>
        <span>Home </span>/contact
      </p>
      <div className={styles.container2}>
        <div className={styles.firstbox}>
          <div className={styles.box}>
            <h4>
              <BsTelephone style={iconstyle} /> Call To Us
            </h4>
            <p>We are available 24/7, 7 days a week.</p>

            <p>
              Phone: <a href="#">+88016111112222</a>
            </p>
          </div>
          <div className={styles.box1}>
            <h4>
              <AiOutlineMail style={iconstyle1} /> Write To Us
            </h4>
            <p>Fill out our form and we will contact you within 24hours.</p>

            <p>
              Emails:<a href="#">Customer@exclusive.com</a>{" "}
            </p>
            <p>
              Emails:<a href="#">Support@exclusive.com</a>{" "}
            </p>
          </div>
        </div>
        <div className={styles.secondbox}>
          <div className={styles.box2}>
            <input type="text" placeholder="Your Name *" />
            <input type="email" placeholder="Your Email *" />
            <input type="tel" placeholder="Your Phone *" />
          </div>
          <div className={styles.box3}>
            <textarea
              name="Message"
              placeholder="Message"
              id=""
              cols="80"
              rows="20"
            ></textarea>
          </div>
          <div className={styles.btn}>
            <button>Send Message</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contactus;
