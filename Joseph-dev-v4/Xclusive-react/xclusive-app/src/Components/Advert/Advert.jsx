import React from 'react'
import styles from './Advert.module.css'
 
const Advert = () => {
  return (
    <div className={styles.container}>
          <div className={styles.topaddtxt}>  
            <h5>
                Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
            </h5>
            <div>
                <p>ShopNow</p>
            </div>
        </div>

      <div className={styles.select}>
      <select value="Select Language" id="head">
        <option value="">English</option>
        <option value="">Mandarin</option>
        <option value="">Japan</option>
        <option value="">Russian</option>
        <option value="">Portuguese</option>
        <option value="">French</option>
      </select>
     </div>      
    </div>
  )
}

export default Advert
