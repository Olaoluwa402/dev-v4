import React from "react";
import styles from "./Advert.module.css"

const Advert =()=>{
    return(
        <div className={styles.advert}>

            <p>Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%! <span><a href="/">Shop Now</a></span></p>
            <select name="Language" id="">
                <option value="English">English</option>
                <option value="French">French</option>
                <option value="Mandarin">Mandarin</option>
                <option value="Arabic">Arabic</option>
            </select>

        </div>
    )
}

export default Advert