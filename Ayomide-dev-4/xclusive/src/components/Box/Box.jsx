import React from "react";
import styles from "./Box.module.css";
import { BsTrash3 } from "react-icons/bs";
import { AiOutlineShoppingCart } from "react-icons/ai";

function Box() {
  return (
    <div>
    
        {/* <div className={styles.wishlist}>
          <h4>Wishlist(4)</h4>
          <button className={styles.matb}>Move All To Bag</button>
        </div> */}
        <div className={styles.wishsection}>
          <div className={styles.wishlisttab1}>
            <div className={styles.tabmain}>
              <div className={styles.tab1}>
                <p>-35%</p>
                <div className={styles.trash}>
                  <BsTrash3 />
                </div>
              </div>
              <img
                src="../wishlist-asset/guccibag.png"
                className="imgclass"
                alt=""
              />
              <button className={styles.cartbtn}>
                <AiOutlineShoppingCart /> Add to cart
              </button>
            </div>
            <div className={styles.nameprice}>
              Gucci duffle bag <br />
              <span style={{ color: "#db4444" }}>
                $960{" "}
                <span className="spa" style={{ color: "#000000" }}>
                  $1160
                </span>
              </span>
            </div>
          </div>
        </div>
      
    </div>
  );
}

export default Box;
