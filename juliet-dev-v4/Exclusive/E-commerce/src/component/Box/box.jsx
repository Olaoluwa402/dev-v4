import React from 'react'
import styles from "./box.module.css"
import Percentage from './Percentage';

const percentMaped = {
  Percentage:Percentage,
};

const Box = ({ products }) => {
  const {image, title, price, oldPrice, percent} = products
  const PercentComp = percentMaped[percent];
  return (
    <div className={styles.wishlist}>

      <div className={styles.product}>
          <div className={styles.product_box}>
            <img src={image} alt="" />
            <div className={styles.cart}>
              <img src="./e-images/white-cart.svg" alt="" />
              <span>Add To Cart</span>
            </div>
            <div className={styles.position}>
            {PercentComp && <PercentComp />}
            <img src="./e-images/Ellipse 13.png" alt="" className={styles.elipse} />
              <img src="./e-images/icon-delete.svg" alt="" className={styles.delete}/>
            </div>
          
          </div>
          <div className={styles.price}>
            <p>{title}</p>
            <div className={styles.dollar}>
              <span>${price}</span>
              <s>{oldPrice}</s>
            </div>
          </div>
        </div>



        </div>
  )
}

export default Box

