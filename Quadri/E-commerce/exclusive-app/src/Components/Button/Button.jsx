import React from "react";
import styles from "./Button.module.css"


const Button =({text,color,backgroundColor})=>{
    return(
        <div className={styles.button} style={{color:color, backgroundColor: backgroundColor}}>
            {text ? text : "I'm a button"}
        </div>
    )
}

export default Button