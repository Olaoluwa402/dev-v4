import React from "react";
import Box from "../Box/Box";
import styles from "./Boxcontainer.module.css";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { BsTrash3 } from "react-icons/bs";



  const Boxcontainer = () => {
    const boxData = [
      {id: Math.floor(Math.random() * 1000),
      percent: "-35%",
      delete: < BsTrash3 />,
      image: "/Asset/wishlist-asset/guccibag.png",
      productname: "GUCCI DUFFLE BAG",
      price: "$1190",
      discountPrice:" $650",
    },
      {id: Math.floor(Math.random() * 1000),
      percent: "-35%",
      delete: < BsTrash3 />,
      image: "/Asset/wishlist-asset/guccibag.png",
      productname: "GUCCI DUFFLE BAG",
      price: "$1190",
      discountPrice:" $650",
    },
      {id: Math.floor(Math.random() * 1000),
      percent: "-35%",
      delete: < BsTrash3 />,
      image: "/Asset/wishlist-asset/guccibag.png",
      productname: "GUCCI DUFFLE BAG",
      price: "$1190",
      discountPrice:" $650",
    },
      {id: Math.floor(Math.random() * 1000),
      percent: "-35%",
      delete: < BsTrash3 />,
      image: "/Asset/wishlist-asset/guccibag.png",
      productname: "GUCCI DUFFLE BAG",
      price: "$1190",
      discountPrice:" $650",
    },

    
    ]
    return ( 
       <>
      <section>
        <div className={styles.wishlist}>
          <h4>Wishlist(4)</h4>
          <button className={styles.matb}>Move All To Bag</button>
        </div>

        <Box boxData={boxData}/>
        

        
      </section>
    </>
     );
  }
   
  export default Boxcontainer;

   
 
