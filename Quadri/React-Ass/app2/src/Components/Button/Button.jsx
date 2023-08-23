import React from "react";
import styles from "./Button.module.css"


const Button=({width,backgroundColor,color,text})=>{
    return(
        <button className={styles.button} style={{width:width,backgroundColor:backgroundColor,color:color}}>
                {text ? text : "i'm a button"}
        </button>
    )
}

export default Button