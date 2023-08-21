import React from 'react'
import styles from "./box.module.css"

const Box = ({products}) => {
  const {img, title, price, oldPrice} = products
  return (
    <div className={styles.wishlist}>

      <div className={styles.product}>
          <div className={styles.product_box}>
            <img src={img} alt="" />
            <div className={styles.cart}>
              <img src="./e-images/white-cart.svg" alt="" />
              <span>Add To Cart</span>
            </div>
            <div className={styles.position}>
              <button>-35%</button>
              <img src="./e-images/Ellipse 13.png" alt="" className={styles.elipse} />
              <img src="./e-images/icon-delete.svg" alt="" className={styles.delete}/>
            </div>
          </div>
          <div className={styles.price}>
            <p>{title}</p>
            <div className={styles.dollar}>
              <span>{price}</span>
              <s>{oldPrice}</s>
            </div>
          </div>
        </div>






{/* 

        <div className={styles.product}>
          <div className={styles.product_box}>
            <img src="./e-images/speaker.png" alt="" />
            <div className={styles.cart}>
              <img src="./e-images/white-cart.svg" alt="" />
              <span>Add To Cart</span>
            </div>
            <div className={styles.position}>
              <img src="./e-images/Ellipse 13.png" alt="" className={styles.elipse} />
              <img src="./e-images/icon-delete.svg" alt="" className={styles.delete} />
            </div>
          </div>
          <div className={styles.price}>
            <p>RGB liquid CPU Cooler</p>
            <div className={styles.dollar}>
              <span>$1960</span>
            </div>
          </div>
        </div>


        <div className={styles.product}>
          <div className={styles.product_box}>
            <img src="./e-images/black-pad.png" alt="" />
            <div className={styles.cart}>
              <img src="./e-images/white-cart.svg" alt="" />
              <span>Add To Cart</span>
            </div>
            <div className={styles.position}>
              <img src="./e-images/Ellipse 13.png" alt="" className={styles.elipse} />
              <img src="./e-images/icon-delete.svg" alt="" className={styles.delete} />
            </div>
          </div>
          <div className={styles.price}>
            <p>GP11 Shooter USB Gamepad</p>
            <div className={styles.dollar}>
              <span>$550</span>
            </div>
          </div>
        </div>


        <div className={styles.product}>
        <div className={styles.product_box}>
            <img src="./e-images/jacket.png" alt="" />
            <div className={styles.cart}>
              <img src="./e-images/white-cart.svg" alt="" />
              <span>Add To Cart</span>
            </div>
            <div className={styles.position}>
              <img src="./e-images/Ellipse 13.png" alt="" className={styles.elipse} />
              <img src="./e-images/icon-delete.svg" alt="" className={styles.delete} />
            </div>
          </div>
          <div className={styles.price}>
            <p>Quilted Satin Jacket</p>
            <div className={styles.dollar}>
              <span>$750</span>
            </div>
          </div>
        </div> */}

    </div>
  )
}

export default Box