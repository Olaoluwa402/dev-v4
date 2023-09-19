import React from "react";
import styles from "./Box.module.css";
import { BiDollar } from "./react-icons/bi";
import { BsArrowUp } from "./react-icons/bs";

const Box = ({boxContent}) => {
  return (

    <div className={styles.boxcontainer}>
      {boxContent && boxContent.length > 0 ? (
        boxContent.map((item) => (
          <div key={item.id} className={styles.box}>
            <div className={styles.topbox}>
  <div className={styles.toptext}>
    <h4>{item.title}</h4>
    <p>{item.price}</p>
  </div>
  <div className={styles.outtericon}>
    <div className={styles.innericon}>
       <div className={styles.icon}>{item.icon}</div>
    </div>
  </div>
</div>
<div className={styles.bottombox}>
  <div className={styles.icon2}>
    <div className={styles.icon2}>{item.icon2}</div>
    <p>{item.percent}</p>
  </div>

  <span>Since last month</span>
</div>
</div>

        ))
      ) : (
        <h2>No box created Yet</h2>
      )}
     
    </div>
  );
};

export default Box;


