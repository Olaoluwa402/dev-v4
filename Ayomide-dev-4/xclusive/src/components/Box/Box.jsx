import React from "react";
import styles from "./Box.module.css";
import { BsTrash3 } from "react-icons/bs";
import { AiOutlineShoppingCart } from "react-icons/ai";

const Box =  ({boxData}) => {
  return (
    <div className={styles.wishsection}>
      {boxData && boxData.length > 0 ? (boxData.map((item) => (
        <div key={item.id} className={styles.wishlisttab1}>
          <div className={styles.tabmain}>
            <div className={styles.tab1}>
              <p>{item.percent}</p>
              <div className={styles.trash}>
                <p>
                  {item.delete}
                </p>
              </div>
            </div>
            <img src={item.image} className={styles.pic} alt="" />
            <button className={styles.cartbtn}>
              <AiOutlineShoppingCart /> Add to cart
            </button>
          </div>
          <div className={styles.nameprice}>
            {item.productname} <br />
            <span style={{ color: "#db4444" }}>
              {item.price}
              <span className="spa" style={{ color: "#000000" }}>
                {item.discountPrice}
              </span>
            </span>
          </div>
        </div>
      ))
      ): (<h2>No Product Added</h2>)
      }

    </div>
    );
};
 
export default Box;
