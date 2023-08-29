import React, { useState } from "react";
import styles from "./Forms.module.css";
const Forms = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const changeHandler = (e) => {
    const { name, value } = e.target;

    if (name === "email") {
      setEmail(value);
    }

    if (name === "password") {
      setPassword(value);
    }
  };

  const submitHander = (e) => {
    e.preventDefault();
    const data = {
      email,
      password,
    };

    // send the data to backend

    console.log(data);

    setEmail("");
    setPassword("");
  };

  console.log(email, password);

  return (
    <div className={styles.container}>
      <h2>Sign Up</h2>
      <form onSubmit={submitHander}>
        <div className={styles.formGroup}>
          <label htmlFor="email">email</label>
          <input
            type="text"
            placeholder="email"
            name="email"
            value={email}
            // onChange={(e) => setEmail(e.target.value)}
            onChange={changeHandler}
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="password">password</label>
          <input
            type="password"
            placeholder="password"
            name="password"
            value={password}
            onChange={changeHandler}
          />
        </div>

        <button type="submit">submit</button>
      </form>
    </div>
  );
};

export default Forms;
