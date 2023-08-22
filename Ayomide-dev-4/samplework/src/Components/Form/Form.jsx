import React from 'react';
import styles from './Form.module.css';
import {FcGoogle} from 'react-icons/fc';


function Form() {
  return (
    <div>
      <section>
        <img src="./assets/cartimage.png" alt="cart" />
        <div className={styles.form}>
          <b>Create an account</b>
          <p>Enter your details below</p>
          <form>
            <input type="text" placeholder="Name" />
          <br></br>
            <input type="email" placeholder="email or phone Number" />
           <br></br>
            <input type="password" placeholder="Password" />
           
          </form>
          <div className={styles.account}>
            <button>Create Account</button>
          </div>
          <div className={styles.google}>
            <button>
              <FcGoogle />
              Sign up with Google
            </button>
          </div>
          <p className={styles.log}>
            Already have account? <a href=""> Log in</a>
          </p>
        </div>
      </section>
    </div>
  );
}

export default Form
