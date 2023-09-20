import React, { useContext } from "react";
import styles from "./product.module.css";
import { BsCart3 } from "react-icons/bs";
// import { GlobalContext } from "../../context";

function Product({
  prod_icon,
  // prod_img,
  // prod_desc,
  // prod_price,
  // prod_former_price,
  prod_rating,
  prod_data: { id, title, price, stock, product_img, desc },
}) {
  return (
    <div className={styles.product_tab}>
      <div className={styles.tab_main}>
        {/* <div className={styles.top_right_icon_container}>
          <div className={styles.top_right_icon}>
            {prod_icon ? prod_icon : "x"}     
          </div>
        </div> */}
        <span className={styles.top_right_icon}>
          <span className={styles.tr_icon}>{prod_icon ? prod_icon : "x"}</span>

          <span className={styles.tr_icon}>{prod_icon ? prod_icon : "x"}</span>
        </span>

        <img src={product_img} alt="" />

        <button
          onClick={() =>
            cartDataHandler(id, title, price, stock, product_img, desc)
          }
        >
          <BsCart3 className={styles.cart} />
          Add To Cart
        </button>
      </div>

      <div className={styles.tab_desc}>
        <h6>{title ? title : "Product description"}</h6>
        <p>
          {price ? price : "Product price"}
          <span>{prod_former_price ? prod_former_price : ""}</span>
        </p>
        {prod_rating ? prod_rating : ""}
      </div>
    </div>
  );
}

// const { products, addToCartHandler, cartData } = useContext(GlobalContext);
//   // console.log(prod_data);
//   // const { id, title, price, stock, product_img, desc } = prod_data;

//   const cartDataHandler = async ({
//     id,
//     title,
//     price,
//     stock,
//     product_img,
//     desc,
//   }) => {
//     const exist = cartData.find((data) => data.id === id);
//     console.log(exist);
//     // const exist = true;

//     if (exist) {
//       // alert("Item already exists in cart");
//       console.log("Item already exists in cart");
//     }
//     await addToCartHandler(id, title, price, stock, product_img, desc);
//     // alert("product added to cart");
//     console.log("product added to cart");
//   };

export default Product;
