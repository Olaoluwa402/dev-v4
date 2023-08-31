import React from "react";
import { useState, useEffect } from "react";
import styles from "./SignUp.module.css";
import { Link, Navigate } from "react-router-dom";
import Button2 from "../Button2/Button2";
import Button3 from "../Button3/Button3";
import BeatLoader from "react-spinners/BeatLoader";

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // setLoading(true)
    // setTimeout(() => {
    // setLoading(false)
    // }, 5000)
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "name") {
      setName(value);
    }
    if (name === "email") {
      setEmail(value);
    }

    if (name === "password") {
      setPassword(value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      const data = {
        name,
        email,
        password,
      };

      console.log(data);
      setLoading(false);
    }, 5000);
  };

  console.log(loading);

  return (
    <div className={styles.outter}>
      <div className={styles.container}>
        <div className={styles.inner_container}>
          <div>
            <img src="https://res.cloudinary.com/dfeyofjln/image/upload/v1692657182/SignUp_Pix_slj59o.png" />
          </div>
          <div className={styles.hero}>
            <div className={styles.top}>
              <h2>Create an account</h2>
              <p>Enter your details below</p>
            </div>
            <form onSubmit={handleSubmit}>
              <div className={styles.input_group}>
                <input
                  type="text"
                  name="name"
                  id={styles.name}
                  placeholder="Name"
                  value={name || ""}
                  onChange={handleChange}
                ></input>
              </div>

              <div className={styles.input_group}>
                <input
                  type="text"
                  name="email"
                  id={styles.name}
                  placeholder="Email or Phone Number"
                  value={email || ""}
                  onChange={handleChange}
                ></input>
              </div>

              <div className={styles.input_group}>
                <input
                  type="password"
                  name="password"
                  id={styles.name}
                  placeholder="Password"
                  value={password || ""}
                  onChange={handleChange}
                ></input>
              </div>
              <div className={styles.buttons}>
                {loading ? (
                  <BeatLoader color="#36d7b7" />
                ) : (
                  <Button2 />
                )}

                <Button3 />
              </div>
            </form>
            <div className={styles.bottomtext}>
              <span>Already have account?</span>
              <Link to="/login">
                <p>
                  <u>Log In</u>
                </p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
