import React from 'react'
import styles from './Hero.module.css';

function Hero() {
  return (
    <div className={styles.container}>
      <div className={styles.container1}> 
      <p style={{fontWeight: 700}}>SUBSCRIBE</p>
      <p>Signup with your email address to recieve news updates</p>
      <div>
        <input type="text" placeholder='First name'/>
        <input type="text" placeholder='Last name'/>
        <input type="text" placeholder='Email'/>
        <p><button>Subscribe</button></p>
      </div>
      </div>
    </div>
  )
}

export default Hero
