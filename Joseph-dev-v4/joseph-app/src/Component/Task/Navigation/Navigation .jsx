import React from 'react'
import styles from './Navigation.module.css'

const Navigation  = () => {
  return (
    <div className={styles.container}>
      <div><img src='https://res.cloudinary.com/dfeyofjln/image/upload/v1695486863/Memo-removebg-preview_v9hk0i.png'/></div>
      <div>  
        <button className={styles.buttons}>Log Out</button>
        <button className={styles.buttons}>Delete Account</button>  
      </div>
      
    </div>
  )
}



export default Navigation 
