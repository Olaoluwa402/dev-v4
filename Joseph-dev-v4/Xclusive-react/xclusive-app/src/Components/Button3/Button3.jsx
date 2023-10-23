import React from 'react'
import styles from './Button3.module.css'
import { Link } from 'react-router-dom'

const Button3 = () => {
  return (
    <div>
         <Link to= "/"><button className={styles.btn} >
            <img src='https://res.cloudinary.com/dfeyofjln/image/upload/v1692720848/Icon-Google_rz2dsu.png'/>
            <span>Sign up with Google</span>
          </button></Link>
    </div>
  )
}

export default Button3