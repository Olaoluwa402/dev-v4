import React from "react";
import styles from "./Just.module.css"
import Text from "../Text/Text";
import Button from "../Button/Button";
import Cart from "../Cart/Cart";
import Rating from "../Ratings/Ratings";


const Just=({justData})=>{
    return(
        <>
        <div className={styles.just}>
            
        <Text
        text = "Just For You"
        fontSize= "18px"
        />
        <Button
        backgroundColor="white"
        color="black"
        text= "See All"
        />
        </div>
         <div className={styles.just_items}>
         {justData && justData.length > 0 ? (
             justData.map((items)=>(
             <div key ={items.id} className={styles.just_img}>
                {items.image }   
                <Cart/>
                 <h6>{items.title}</h6>
                <p>{items.price} <span>{items.discountedPrice}</span></p>
                    <Rating/>
                 <span id={styles.delete}>{items.images}</span>
             </div>
             
             ))
         ):(
             <h2>No Product On Sale</h2>
         )}
          
     </div>
     </>
    )
}

export default Just