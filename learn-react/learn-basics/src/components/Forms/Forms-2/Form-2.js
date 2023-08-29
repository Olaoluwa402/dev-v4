import React, { useEffect, useState } from "react";
import Spinner from "../../Spinner/CustomSpinner.tsx";
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
  // const [email, password, username, confirmPassword] = input;

  const [isLoading, setIsLoading] = useState(false);

  // useEffect(()=> {

  // }, [])

  const changeHandler = (e) => {
    const { name, value } = e.target;

    setInput((currState) => ({
      ...currState,
      [name]: value,
    }));
  };

  console.log(input);

  const submitHander = (e) => {
    e.preventDefault();
    // set loading
    setIsLoading(true);
    //cause a delay befor submiting the date
    setTimeout(() => {
      //submit the data after the dalay
      const data = {
        email: input.email,
        username: input.username,
        password: input.password,
      };

      console.log(data);

      //set loading again
      setIsLoading(false);
      setInput({
        email: "",
        password: "",
        confirmPassword: "",
        username: "",
      });
    }, 5000);
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
            value={input.email}
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
            value={input.username}
            onChange={changeHandler}
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="password">password</label>
          <input
            type="password"
            placeholder="password"
            name="password"
            value={input.password}
            onChange={changeHandler}
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="confirm-password">confirm-password</label>
          <input
            type="confirm-password"
            placeholder="confirm-password"
            name="confirm-password"
            value={input.confirmPassword}
            onChange={changeHandler}
          />
        </div>

        {isLoading ? (
          <Spinner />
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
