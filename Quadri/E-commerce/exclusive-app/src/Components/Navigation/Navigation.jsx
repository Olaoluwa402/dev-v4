import React from "react";
import styles from "./Navigation.module.css"
 import {BiSearch, BiUser} from "react-icons/bi"
 import {AiOutlineHeart, AiOutlineShoppingCart} from "react-icons/ai"
 import { NavLink } from "react-router-dom";


const Navigation = ()=>{
    return (
        <div className={styles.navigation}>
            <h3>Exclusive</h3>
            <div className={styles.items}>
                <NavLink to = "/">Home</NavLink>
                <NavLink to="/contact">Contact</NavLink>
                <a href="/">About</a>
                <a href="/">Sign Up</a>
            </div>
            <div className={styles.cart_items}>
                <label for="search"></label>
                <span id={styles.lens}>
                <input type="text" placeholder="What are you searching for?"/>
                   <a href="/"><BiSearch/></a> 
                </span>
                <span id={styles.cart_img}>
                 <a href="/"><AiOutlineHeart/></a> 
                  <a href="/"><AiOutlineShoppingCart/></a> 
                  <a href="/"><BiUser/></a>
            </span>
            </div>
        </div>
    )
}

export default Navigation