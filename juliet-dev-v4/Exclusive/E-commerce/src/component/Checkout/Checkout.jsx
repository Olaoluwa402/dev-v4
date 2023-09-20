import React from 'react'
import styles from "./Checkout.module.css"
import Billing from '../BillingDetails/Billing'

function Checkout() {
  return (
    <div  className={styles.container}>
      <div className={styles.rapper}>
      <div className={styles.spann}>
          <span >Account  / </span>
          <span>My Account  / </span>
          <span>Product  / </span>
          <span>View Cart  / </span>
          <span>Checkout</span>
        </div>
        <h2>Billing Details</h2>
      </div>

        <div className={styles.Wrapper}>
        <Billing />
        </div>
    </div>
  )
}

export default Checkout