import React, { useState } from "react";
import styles from "./Login.module.css";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

function LoginPage() {
  const [Data, setData] = useState({
    email: "",
    password: "",
  });
  const changeHandler = (e) => {
    const { name, value } = e.target;
    setData({ ...Data, [name]: value });
  };
  const submitHandler = (e) => {
    const { email, password } = Data;
    if (email === "" || password === "") {
      toast.error("please fill in your email and password!");
    }
    console.log(Data);
  };

  return (
    <div>
      <div className={styles.wrapper}>
        <div className={styles.left}>
          <img src="./e-images/phonebag.svg" alt="" />
        </div>
        <div className={styles.right}>
          <h2>Log in to Exclusive</h2>
          <p>Enter your details below</p>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Email or Phone Number"
            onChange={changeHandler}
          />

          <input
            type="password"
            id="password"
            name="password"
            placeholder="password"
            onChange={changeHandler}
          />

          <div className={styles.btn}>
            <button type="submit" onClick={submitHandler}>
              Log In
            </button>
            <Link to={"/"}>Forget PassWord ?</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
