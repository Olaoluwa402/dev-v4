import React from "react";
import styles from "./Home.module.css";

const Home = () => {
  
  return (
    <div className={styles.container}>
      <h1>MEMO NOTES</h1>
      <div className={styles.login}>
        <h2>Login to Memo Notes</h2>
        <div className={styles.email}>
          <label className={styles.label}>Email</label>
          <input type="text"  placeholder="Sample@email.com" />
        </div>
        <div className={styles.password}>
          <label className={styles.label2}>Password</label>
          <input type="password"  placeholder="Enter your password" />
        </div>

        <button>Login</button>

        <div className={styles.bottom}>
          <h4>Do not have an Account?</h4>
          <p><u>Sign Up</u></p>
        </div>
      </div>
    </div>
  );
};

export default Home;
