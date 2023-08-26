import React from 'react'
import styles from './Box.module.css'

const Box = (bo) => {
  return (

        <div className={styles.wishlistbox}>
            <div className={styles.wishlistbox_inner}>
                <div className={styles.topbox}>
                    <div className={styles.image}>
                        <img src="https://res.cloudinary.com/dfeyofjln/image/upload/v1692172726/Discount_percent_tnik6k.png" />
                    </div>
                    <div className={styles.topbox_img}>
                        <a href="#"><img src="https://res.cloudinary.com/dfeyofjln/image/upload/v1692172728/icon-delete_pwqhhd.png" /></a>
                    </div>

                    <div className={styles.wislist_image}>
                        <img src="https://res.cloudinary.com/dfeyofjln/image/upload/v1692172728/guccibag_jmaqgc.png"/>
                    </div>
                </div>
                <div className={styles.addtocart}>
                    <img src="https://res.cloudinary.com/dfeyofjln/image/upload/v1692172726/Cart1_r728vl.png" />
                    <a href="#">
                        <p>Add to Cart</p>
                    </a>
                </div>
                <div className={styles.wishlistitems}>
                    <h4>Gucci Duffle Bag</h4>
                    <div className= {styles.prices}>
                        <p className={styles.price}>$960</p>
                        <h5 className={styles.old_price}><s>$1100</s></h5>
                    </div>
                </div>
            </div>
        </div>
        

  )
}

export default Box