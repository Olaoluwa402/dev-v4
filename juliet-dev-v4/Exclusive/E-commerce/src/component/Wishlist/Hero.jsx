import React, { useContext } from "react";
import styles from "./Hero.module.css";
import Box from "../Box/box";
import Box1 from "../Box1/Box1";
// import { Product } from '../Box/Data'
import { Product1 } from "../Box1/Data1";
import { GlobalContext } from "../../context";

const HeroPage = () => {
  // destructuring products and productApi function from context.js's global context using use context hook
  const products = useContext(GlobalContext);

  return (
    <div>
      <div className={styles.Hero}>
        <div className={styles.intro}>
          <h4>Whishlist (4)</h4>
          <button>Move All To The Bag</button>
        </div>

        <div className={styles.wishlist}>
          {products &&
            products.map((items) => {
              return <Box key={items.id} products={items} />;
            })}
        </div>

        <div className={styles.intro2}>
          <div className={styles.intro2_flex}>
            <button className={styles.btn}></button>
            <h4>Just For You</h4>
          </div>
          <button>See All</button>
        </div>

        <div className={styles.just_for_you}>
          {Product1 &&
            Product1.map((product) => {
              return <Box1 key={product.id} Items={product} />;
            })}
        </div>
      </div>
    </div>
  );
};

export default HeroPage;
