import React from "react";
import styles from "./product.module.css";
import { BsCart3 } from "react-icons/bs";

function Product({
  prod_icon,
  prod_img,
  prod_desc,
  prod_price,
  prod_former_price,
  prod_rating,
}) {
  return (
    <div className={styles.product_tab}>
      <div className={styles.tab_main}>
        <div>{prod_icon ? prod_icon : "x"}</div>

        <img src={prod_img} alt="" />

        <button>
          <BsCart3 className={styles.cart} /> Add To Cart
        </button>
      </div>

      <div className={styles.tab_desc}>
        <h6>{prod_desc ? prod_desc : "Product description"}</h6>
        <p>
          {prod_price ? prod_price : "Product price"}
          <span>{prod_former_price ? prod_former_price : ""}</span>
        </p>
        {prod_rating ? prod_rating : ""}
      </div>
    </div>
  );
}

export default Product;
