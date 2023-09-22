import React, { useContext, useEffect, useState } from "react";
import styles from "./wishlist.module.css";
import Product from "../product_tab/product";
import { BsTrash3 } from "react-icons/bs";
import Rating from "../rating/Rating";
import { GlobalContext } from "../../context";

function Wishlist() {
  const { wishlistData, getWishlistData, deleteWishItem, getWishlist } =
    useContext(GlobalContext);

  // useEffect(() => {
  //   getWishlist();
  //   getWishlistData();
  // }, []);

  console.log(wishlistData);
  return (
    <section>
      <div className={styles.wishlist_cta}>
        <h5>Wishlist ({wishlistData.length})</h5>
        <button>Move All To Bag</button>
      </div>
      <div className={`${styles.product_tabs} product_tabs`} id="product_tabs">
        {wishlistData && wishlistData.length > 0 ? (
          wishlistData.map((data) => (
            <Product
              key={data.id}
              prod_icon={<BsTrash3 />}
              product_img={data.product_img}
              desc={data.title}
              price={data.price}
              prod_rating={<Rating />}
            />
          ))
        ) : (
          <h2 style={{ textAlign: "center" }}>No products in Wishlist.</h2>
        )}
      </div>

      {console.log(wishlistData)}
    </section>
  );
}

export default Wishlist;
