import React from "react";
import Box from "../Box/Box";
import styles from "./Boxcontainer.module.css";
// import { AiOutlineShoppingCart } from "react-icons/ai";
// import { BsTrash3 } from "react-icons/bs";

function BoxContainer() {
  return (
    <>
      <section>
        <div className={styles.wishlist}>
          <h4>Wishlist(4)</h4>
          <button className={styles.matb}>Move All To Bag</button>
        </div>
        <div className={styles.boxes}>
          <Box img="/Asset/wishlist-asset/guccibag.png" />
          <Box img="/Asset/wishlist-asset/radio.png" />
          <Box img="/Asset/wishlist-asset/black-keypad.png" />
          <Box img="/Asset/wishlist-asset/jacket.png" />
        </div>
      </section>
      <section>
        <div className={styles.wishlist}>
          <h4>Wishlist(4)</h4>
          <button className={styles.matb}>Move All To Bag</button>
        </div>
        <div className={styles.boxes}>
          <Box img="/Asset/wishlist-asset/laptop.png" />
          <Box img="/Asset/wishlist-asset/television
          
          
          
          
          
          
          .png" />
          <Box img="/Asset/wishlist-asset/red-keypad.png" />
          <Box img="/Asset/wishlist-asset/keyboard.png" />
        </div>
      </section>
    </>
  );
}

export default BoxContainer;
