import React, { useContext, useEffect } from "react";
import styles from "./fyp.module.css";
import Product from "../product_tab/product";
import Rating from "../rating/Rating";
import { BsEye } from "react-icons/bs";

import { GlobalContext } from "../../context";

function Fyp() {
  const { products, getProducts, setProducts, getProductsReq } =
    useContext(GlobalContext);

  useEffect(() => {
    getProductsReq();
  }, []);
  console.log(products);

  return (
    <section>
      <div className={styles.wishlist_cta}>
        <h5>Just for you (4)</h5>
        <button>See All</button>
      </div>
      <div className={`${styles.product_tabs} product_tabs`} id="product_tabs">
        {products &&
          products.map((data) => (
            <Product
              key={data.id}
              prod_icon={<BsEye />}
              prod_rating={<Rating />}
              product={data}
              id={data.id}
              title={data.title}
              price={data.price}
              product_img={data.product_img}
              desc={data.desc}
            />
          ))}
      </div>
    </section>
  );
}

export default Fyp;
