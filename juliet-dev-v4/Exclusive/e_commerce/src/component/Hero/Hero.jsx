import React from 'react'
import styles from './Hero.module.css'
import Box from '../Box/box'
import Box1 from '../Box1/Box1'
import { Product } from '../Box/Data'
import style from "../Box/box.module.css"


const HeroPage = () => {

  return (
    <div>
        <div className={styles.Hero}>

        <div className={styles.intro}>
        <h4>Whishlist (4)</h4>
        <button>Move All To The Bag</button>
      </div>

      {Product && Product.map((product)=>{
        return  <Box key={product.id} products={product} className={style.wishlist} />
      })}
      

      <div className={styles.intro2}>
        <div className={styles.intro2_flex}>
          <button className={styles.btn}></button>
          <h4>Just For You</h4>
        </div>
        <button>See All</button>
      </div>

      <Box1/>

        </div>
    </div>
  )
}

export default HeroPage