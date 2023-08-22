import React from "react";
import styles from "./Ratings.module.css"
import Text from "../Text/Text";

const Rating=()=>{
    return (
        <div className= {styles.rating}>
            <img src="https://res.cloudinary.com/di9r3toow/image/upload/v1692189523/yellowstar_kk2lfk.png" alt="" />
            <img src="https://res.cloudinary.com/di9r3toow/image/upload/v1692189523/yellowstar_kk2lfk.png" alt="" />
            <img src="https://res.cloudinary.com/di9r3toow/image/upload/v1692189523/yellowstar_kk2lfk.png" alt="" />
            <img src="https://res.cloudinary.com/di9r3toow/image/upload/v1692189523/yellowstar_kk2lfk.png" alt="" />
            <img src="https://res.cloudinary.com/di9r3toow/image/upload/v1692189523/yellowstar_kk2lfk.png" alt="" />
            <Text text = "(65)" fontSize="12px"/>
        </div>
    )
}
export default Rating