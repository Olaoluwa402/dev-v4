import React, { useContext } from "react";
import Box from "../Box/Box";
import styles from "./Boxcontainer.module.css";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { BsTrash3 } from "react-icons/bs";
import { GlobalContext } from "../../context";

const BoxContainer2 = () => {
   
  const {products} = useContext(GlobalContext)
  return (

    <>
      <section>
        <div className={styles.wishlist}>
          <h4>Wishlist(4)</h4>
          <button className={styles.matb}>Move All To Bag</button>
        </div>

        <div className={styles.connn}>
          {products && products.length > 0 ? products.map((item)=>(<Box key={item.id} boxData={item}/>)) : (<h2>No Poducts To Display</h2>)}
          
          
        </div>
      </section>
    </>
  );
};

export default BoxContainer2;
