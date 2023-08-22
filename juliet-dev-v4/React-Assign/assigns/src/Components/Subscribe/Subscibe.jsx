import React from 'react'
import Button from '../Button/Button'
import styles from './Subscribe.module.css'

const Subscibe = () => {
  return (
    <div className={styles.sub_cover}>
        <div className={styles.sub}>
            <h2>SUBSCRIBE</h2>
            <p>Sign up with your email address to receive news and updates</p>
            <div className={styles.inputs}>
                <input type="text" name="" id="" placeholder='FirstName'/>
                <input type="text" name="" id="" placeholder='LastName'/>
                <input type="Email" name="" id="" placeholder='Email'/>
            </div>
            <Button />
        </div>
    </div>
  )
}

export default Subscibe