import React, { useContext, useEffect, useState } from "react";
import styles from "./wishlist.module.css";
import Product from "../product_tab/product";
import { BsTrash3 } from "react-icons/bs";
import Rating from "../rating/Rating";
import { GlobalContext } from "../../context";

function Wishlist() {
  const { wishlistData, getWishlistData } = useContext(GlobalContext);
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(wishlistData);
  }, [wishlistData]);
  console.log(wishlistData);
  const wishData = [
    {
      product_img: "/Assets/wishlist-page-assets/wishlist-guccibag.png",
      desc: "Gucci duffle bag",
      price: "$960",
      prod_former_price: "$1160",
    },
    {
      product_img: "/Assets/wishlist-page-assets/wishlist-radio.png",
      desc: "RGB liquid CPU Cooler",
      price: "$1960",
      prod_former_price: "",
    },
    {
      product_img: "/Assets/wishlist-page-assets/wishlist-black-gamepad.png",
      desc: "GP11 Shooter USB Gamepad",
      price: "$550",
      prod_former_price: "",
    },
    {
      product_img: "/Assets/wishlist-page-assets/wishlist-jacket.png",
      desc: "Quilted Satin Jacket",
      price: "$750",
      prod_former_price: "",
    },
  ];
  return (
    <section>
      <div className={styles.wishlist_cta}>
        <h5>Wishlist (4)</h5>
        <button>Move All To Bag</button>
      </div>
      <div className={`${styles.product_tabs} product_tabs`} id="product_tabs">
        {/* {wishData && wishData.length > 0 ? (
          wishData.map((data) => (
            <Product
              key={data.id}
              prod_icon={<BsTrash3 />}
              product_img={data.product_img}
              desc={data.desc}
              price={data.price}
              prod_former_price={data.prod_former_price}
              prod_rating={<Rating />}
            />
          ))
        ) : (
          <h2>No products in wishlist</h2>
        )} */}

        {wishlistData && wishlistData.length > 0 ? (
          data.map((data) => {
            <h2>{data}</h2>;
          })
        ) : (
          <h2 style={{ textAlign: "center" }}>No products in Wishlist.</h2>
        )}
      </div>
    </section>
  );
}

export default Wishlist;
