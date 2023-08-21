import React from "react";
import styles from "./fyp.module.css";
import Product from "../product_tab/product";
import Rating from "../rating/Rating";
import { BsEye } from "react-icons/bs";

function Fyp() {
  return (
    <section>
      <div className={styles.wishlist_cta}>
        <h5>Just for you (4)</h5>
        <button>See All</button>
      </div>
      <div className={styles.product_tabs} id="product_tabs">
        <Product
          prod_icon={<BsEye />}
          prod_img="/Assets/wishlist-page-assets/wishlist-laptop.png"
          prod_desc="ASUS FHD Gaming Laptop"
          prod_price="$960"
          prod_former_price="$1160"
          prod_rating={<Rating />}
        />
        <Product
          prod_icon={<BsEye />}
          prod_img="/Assets/wishlist-page-assets/wishlist-television.png"
          prod_desc="IPS LCD Gaming Monitor"
          prod_price="$1160"
          prod_rating={<Rating />}
        />
        <Product
          prod_icon={<BsEye />}
          prod_img="/Assets/wishlist-page-assets/wishlist-red-gamepad.png"
          prod_desc="HAVIT HV-G92 Gamepad"
          prod_price="$560"
          prod_rating={<Rating />}
        />
        <Product
          prod_icon={<BsEye />}
          prod_img="/Assets/wishlist-page-assets/wishlist-keyboard.png"
          prod_desc="AK-900 Wired Keyboard"
          prod_price="$200"
          prod_rating={<Rating />}
        />
      </div>
    </section>
  );
}

export default Fyp;
