import React from 'react'
import styles from './Title.module.css'

const Title = () => {
  return (
    <div>
        <div className={styles.page_title}>
          <h4>Home</h4>
          <h4>/</h4>
          <p>Cart</p>
        </div>
    </div>
  )
}

export default Title