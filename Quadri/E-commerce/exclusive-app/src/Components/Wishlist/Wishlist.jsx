import React from "react";
import styles from "./Wishlist.module.css"
import Text from "../Text/Text";
import Button from "../Button/Button";
import Cart from "../Cart/Cart";


const Wishlist =({cartsData})=>{

    return (
        <>
        <div className={styles.wishlist}>
        <Text
        text = "Wishlist(4)"
        fontSize= "18px"
        />
        <Button
        backgroundColor="white"
        color="black"
        text= "Move All to Bag"
        />
        </div>

        <div className={styles.Wishlist_items}>
            {cartsData && cartsData.length > 0 ? (
                cartsData.map((items)=>(
                <div key ={items.id} className={styles.Wishlist_img}>
                   {items.image }   
                   <Cart/>
                    <h6>{items.title}</h6>
                   <p>{items.price} <span>{items.discountedPrice}</span></p>
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

export default Wishlist