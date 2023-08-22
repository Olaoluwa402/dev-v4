import React from "react";
import styles from "./Cart.module.css"
import { AiOutlineShoppingCart} from "react-icons/ai"
import Text from "../Text/Text";

const Cart=()=>{
    return (
        <div className= {styles.cart}>
            <a href="/"><AiOutlineShoppingCart/><Text text= "Add to cart" fontSize= "10px"/></a>
        </div>
    )
}

export default Cart