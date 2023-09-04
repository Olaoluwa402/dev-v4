import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import styles from "./Signup.module.css";
// import BeatLoader from "react-spinners/BeatLoader";

const Signupcomp = () => {
  const [fullName, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const changeHandler = (e) => {
    const { name, value } = e.target;
    if (name === "fullName") {
      setName(value);
      console.log(fullName);
    }
    if (name === "email") {
      setEmail(value);
      console.log(email);
    }
    if (name === "password") {
      setPassword(value);
      console.log(password);
    }
  };

  const sumbitHandler = (e) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      const data = { fullName, email, password };
      console.log(data);
      setLoading(false);
    }, 5000);
  };
  console.log(loading);

  return (
    <div className={styles.section}>
      <div className={styles.pics}>
        <img src="./cartimage.png" alt="cart" />
      </div>
      <div className={styles.form}>
        <b>Create an account</b>
        <p>Enter your details below</p>
        <form onSubmit={sumbitHandler}>
          <input
            type="text"
            placeholder="Name"
            value={fullName}
            name="fullName"
            onChange={changeHandler}
          />
          <br></br>
          <input
            type="email"
            placeholder="email or phone Number"
            value={email}
            name="email"
            onChange={changeHandler}
          />
          <br></br>
          <input
            type="password"
            placeholder="Password"
            value={password}
            name="password"
            onChange={changeHandler}
          />
          <div className={styles.account}>
            <button type="submit">Create Account</button>
          </div>
        </form>

        <div className={styles.google}>
          <button>
            <FcGoogle />
            Sign up with Google
          </button>
        </div>
        <p className={styles.log}>
          Already have account? <a href="/"> Log in</a>
        </p>
      </div>
    </div>
  );
};

export default Signupcomp;
