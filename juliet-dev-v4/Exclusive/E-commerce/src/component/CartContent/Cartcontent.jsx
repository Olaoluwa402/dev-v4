import React from "react";
import styles from "./CartContent.module.css";
import NumberSelector from "../NumberSelector/NumberSelector";


function Cartcontent({content}) {
  const { img, description, price, total,} = content;
  return (
    <div>
      <div className={styles.selected_items}>
        <div className={styles.inner}>
          <img src={img} alt="" />
          <div className={styles.cancel}>
            <img src="./e-images/icon-cancel.svg" alt="" id="cancel" />
          </div>
          <p>{description}</p>
        </div>
        <p>${price}</p>
        <NumberSelector />
        <p>${total}</p>
      </div>
    </div>
  );
}

export default Cartcontent;
