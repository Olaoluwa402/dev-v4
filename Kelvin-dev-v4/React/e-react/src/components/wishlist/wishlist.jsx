import React from "react";
import styles from "./wishlist.module.css";
import Product from "../product_tab/product";
import { BsTrash3 } from "react-icons/bs";

function Wishlist() {
  return (
    <section>
      <div className={styles.wishlist_cta}>
        <h5>Wishlist (4)</h5>
        <button>Move All To Bag</button>
      </div>
      <div className={styles.product_tabs} id="product_tabs">
        <Product
          prod_icon={<BsTrash3 />}
          prod_img="/Assets/wishlist-page-assets/wishlist-guccibag.png"
          prod_desc="Gucci duffle bag"
          prod_price="$960"
          prod_former_price="$1160"
        />
        <Product
          prod_icon={<BsTrash3 />}
          prod_img="/Assets/wishlist-page-assets/wishlist-radio.png"
          prod_desc="RGB liquid CPU Cooler"
          prod_price="$1960"
        />
        <Product
          prod_icon={<BsTrash3 />}
          prod_img="/Assets/wishlist-page-assets/wishlist-black-gamepad.png"
          prod_desc="GP11 Shooter USB Gamepad"
          prod_price="$550"
        />
        <Product
          prod_icon={<BsTrash3 />}
          prod_img="/Assets/wishlist-page-assets/wishlist-jacket.png"
          prod_desc="Quilted Satin Jacket"
          prod_price="$750"
        />
      </div>
    </section>
  );
}

export default Wishlist;
