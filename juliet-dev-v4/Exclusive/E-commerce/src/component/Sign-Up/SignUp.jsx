import React, { useState } from "react";
import styles from "./Sign-Up.module.css";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

function SignUp() {
  const [Data, setData] = useState({
    fullName: "",
    email: "",
    password: "",
  });

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setData({ ...Data, [name]: value });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const { email, password, fullName } = Data;
    if (email === "" || password === "" || fullName === " ") {
      toast.error("Please fill all the fields!");
    }
    console.log(Data);
  };
  const { email, password, fullName } = Data;
  return (
    <div className={styles.SignUp}>
      <div className={styles.left}>
        <img src="./e-images/phonebag.svg" alt="" />
      </div>
      <div className={styles.wrapper}>
        <div className={styles.right}>
          <h2>Create an Account</h2>
          <p>Enter your details below</p>

          <div className={styles.Sign_upp}>
            <input
              type="text"
              id="Name"
              name="fullName"
              placeholder="FullName"
              value={fullName}
              onChange={changeHandler}
            />
          </div>
          <div>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Email or Phone Number"
              value={email}
              onChange={changeHandler}
            />
          </div>
          <div>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Password"
              value={password}
              onChange={changeHandler}
            />
          </div>
          <div className={styles.btn}>
            <button type="submit" onClick={submitHandler}>
              Sign Up
            </button>
          </div>
          <div className={styles.google}>
            <button type="submit">
              {" "}
              <img src="./e-images/Google-signup.svg" alt="" />
              Sign up with Google
            </button>
          </div>
          <div className={styles.link}>
            <p>Already have account?</p>
            <Link to="/Login">Log in</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
