import React from "react";
import styles from "./Frontend.module.css"

const Frontend=()=>{
    return (
        <div className={styles.container}>
            <div className={styles.container_img}>
                <img src="https://res.cloudinary.com/di9r3toow/image/upload/v1692578986/image-removebg-preview_1_rmno9x.png" alt="" />
                <img src="https://res.cloudinary.com/di9r3toow/image/upload/v1692578512/download_x6hqrq-removebg-preview_1_fzmsnm.png" alt="" />
                <img src="https://res.cloudinary.com/di9r3toow/image/upload/v1692578792/image-removebg-preview_ggldyh.png" alt="" />
                <img src="https://res.cloudinary.com/di9r3toow/image/upload/v1692579138/n7gv5kk6ynir8z8rspaq-removebg-preview_r2gmik.png" alt="" />
            </div>
        </div>
    );
};

export default Frontend