import React from 'react'
import styles from "./Advert.module.css"

const Advert = () => {
  return (
    <header>
    <div className={styles.head_flexed}>
      <p>
        Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
      </p>
      <a href="/">ShopNow</a>
    </div>
    <div className={styles.select}>
      <select name="" id="head">
        <option value="">English</option>
        <option value="">Mandarin</option>
        <option value="">Japan</option>
        <option value="">Rushian</option>
      </select>
    </div>
  
  </header>
  )
}

export default Advert