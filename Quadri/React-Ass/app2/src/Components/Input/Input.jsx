import React from "react";
import styles from "./Input.module.css"

const Input=({placeholder})=>{
    return(
        <div className={styles.container}>
            <input type="text" placeholder={placeholder ? placeholder : "I'm a placeholder"} />
        </div>
    )
}

export default Input