import React from "react";

import styles from "./Text.module.css"


const Text =({text,fontSize})=>{
    return (
        <div className={styles.text} style={{fontSize : fontSize }}>
            {text? text : "Insert text"}
        </div>
    )
}

export default Text