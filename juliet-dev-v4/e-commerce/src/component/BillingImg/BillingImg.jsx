import React from 'react'
import styles from './BillingImg.module.css'

function BillingImg() {
  return (
    <div>
        
        <div className={styles.pics}>
            <img src="./e-images/Kash.svg" alt="" />
            <img src="./e-images/Visa.svg" alt="" />
            <img src="./e-images/Mastercard.svg" alt="" />
            <img src="./e-images/Nagad.svg" alt="" />
        </div>
    </div>
  )
}

export default BillingImg