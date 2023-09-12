import React from 'react'
import styles from './MenFashion.module.css'

function MenFashion() {
  return (
    <div>
         <div className={styles.container}>
        <ul>
            <li>clothing</li>
            <li>footwear</li>
            <li>accessories</li>
            <li>perfumes</li>
        </ul>
    </div>
    </div>
  )
}

export default MenFashion