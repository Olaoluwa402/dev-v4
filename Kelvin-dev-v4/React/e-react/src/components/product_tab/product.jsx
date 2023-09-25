import React, { useContext, useEffect } from "react";
import styles from "./product.module.css";
import { BsCart3, BsXLg } from "react-icons/bs";
// import { BsEye } from "react-icons/bs";
import { GlobalContext } from "../../context";

const Product = ({
  prod_icon,
  prod_former_price,
  prod_rating,
  id,
  title,
  price,
  product_img,
  desc,
  isWishlist,
  isFyp,
}) => {
  const {
    addToCartHandler,
    cartData,
    getCartData,
    wishlistData,
    addToWishlistHandler,
    getWishlistData,
    removeWishlist,
  } = useContext(GlobalContext);

  const cartDataHandler = async ({
    id,
    title,
    price,
    qty,
    product_img,
    desc,
  }) => {
    const exist = cartData.find((data) => data.id === id);

    if (exist) {
      alert("Item already exists in cart");
      return;
    }
    await addToCartHandler({ id, title, price, qty: 1, product_img, desc });
    await getCartData();
    alert("product added to cart");
  };

  // hnnnnnnnnnnnnnnnnnnnnnnn

  const wishlistDataHandler = async ({
    id,
    title,
    price,
    qty,
    product_img,
    desc,
  }) => {
    const exist = wishlistData.find((data) => data.id === id);

    if (exist) {
      alert("product already exists in wishlist");
      return;
    }
    await addToWishlistHandler({ id, title, price, qty: 1, product_img, desc });
    await getWishlistData();
    alert("product added to wishlist");
  };

  async function wishRemoveHandler(id) {
    await removeWishlist(id);
    alert("product removed from wishlist.");
    console.log(id);
    await getWishlistData();
  }

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

          {isFyp && (
            <span
              className={styles.tr_icon}
              onClick={() =>
                wishlistDataHandler({
                  id,
                  title,
                  price,
                  qty: 1,
                  product_img,
                  desc,
                })
              }
            >
              {prod_icon ? prod_icon : "x"}
            </span>
          )}
          {isWishlist && (
            <span
              className={styles.tr_icon}
              onClick={async () => {
                await removeWishlist(id);
                alert("product removed from wishlist.");
                console.log(id);
                await getWishlistData();
              }}
            >
              {prod_icon ? prod_icon : "x"}
            </span>
          )}
        </span>

        <img src={product_img} alt="" />

        <button
          onClick={() => {
            cartDataHandler({ id, title, price, qty: 1, product_img, desc });
            console.log("added");
          }}
        >
          <BsCart3 className={styles.cart} />
          Add To Cart
        </button>
      </div>

      <div className={styles.tab_desc}>
        <h6>{desc ? desc : "Product description"}</h6>
        <p>
          {price ? +price.replace("NGN", "") : "Product price"}
          <span>{prod_former_price ? prod_former_price : ""}</span>
        </p>
        {prod_rating ? prod_rating : ""}
      </div>
    </div>
  );
};

export default Product;
