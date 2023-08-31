import React from 'react'
import styles from './Login.module.css'
// import Navigation2 from '../Navigation/Navigation2/Navigation2'
// import Button2 from '../Button2/Button2'
// import Button3 from '../Button3/Button3'
import {Link} from 'react-router-dom'


const Login = () => {
  return (
    <div className={styles.container}>
  <div className={styles.inner_container}>
    <div><img src='https://res.cloudinary.com/dfeyofjln/image/upload/v1692657182/SignUp_Pix_slj59o.png'/></div>
  <div className={styles.hero}>
    <div className={styles.top}>
      <div>
         <h2>Log in to 2-OC</h2>
      </div>
     
      <p>Enter your details below</p>
    </div>

    <div className={styles.input_group}>
      <input type='text' id={styles.name} placeholder='Email or Phone Number'></input>
    </div>
    
    <div className={styles.input_group}>
      <input type='password' id={styles.name} placeholder='Password'></input>
    </div>
    <div className={styles.buttons}>
        <button className={styles.login}><Link to= '/dashboard'>Log in</Link></button>
        <button className={styles.forget}><Link to= '/'>Forget Password?</Link></button>
    </div>
             
    </div>
    
  </div>
  </div>
  )
}

export default Login
