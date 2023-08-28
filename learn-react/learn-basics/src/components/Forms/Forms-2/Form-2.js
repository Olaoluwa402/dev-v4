import React, { useState } from "react";
import styles from "../Forms.module.css";

const Forms = () => {
  const initialValues = {
    email: "",
    password: "",
    confirmPassword: "",
    username: "",
  };
  const [input, setInput] = useState(initialValues);

  //destructuring of form fields from the state
  const [email, password, username, confirmPassword] = input;

  const [isLoading, setIsLoading] = useState(false);

  const changeHandler = (e) => {
    const { name, value } = e.target;

    setInput((currState) => ({
      [name]: value,
    }));
  };

  const submitHander = (e) => {
    e.preventDefault();
    // set loading

    //cause a delay befor submiting the date

    //submit the data after the dalay
    const data = {
      email: email,
      username: username,
      password: password,
    };

    console.log(data);

    //set loading again

    setInput({
      email: "",
      password: "",
      confirmPassword: "",
      username: "",
    });
  };

  console.log(input);

  return (
    <div className={styles.container}>
      <h2>Sign Up</h2>
      <div>
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
          <label htmlFor="username">username</label>
          <input
            type="username"
            placeholder="username"
            name="username"
            value={username}
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

        <div className={styles.formGroup}>
          <label htmlFor="confirm-password">confirm-password</label>
          <input
            type="confirm-password"
            placeholder="confirm-password"
            name="confirm-password"
            value={confirmPassword}
            onChange={changeHandler}
          />
        </div>

        {isLoading ? (
          <h2>Loading ....</h2>
        ) : (
          <button onClick={submitHander} type="submit">
            submit
          </button>
        )}
      </div>
    </div>
  );
};

export default Forms;
