import React from 'react'
import styles from './Favourite.module.css'
import Counter from '../Counter/Counter'

const favourite = () => {
  return (
    <div id={styles.favourite} className="relative">
    <a href="/">
      <img src="https://res.cloudinary.com/dfeyofjln/image/upload/v1692172730/Wishlist_1_ka87pn.png" alt="Wishlist" />
    </a>
    <div className="absolute top-5 right-0 w-5 h-5 rounded-full bg-red-600 justify-center items-center flex flex-row text-white text-xs">
            <Counter />
    </div> 
  </div>
  )
}

export default favourite
