import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { registerReq } from "../../apiRequets/user";
import { GlobalContext } from "../../context";
import styles from "./Signup.module.css";
import { NavLink } from "react-router-dom";
import {Formik, Form, Field, ErrorMessage} from 'formik';
// import BeatLoader from "react-spinners/BeatLoader";

const Signupcomp = () => {
  // const [fullName, setName] = useState("");
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  // const [loading, setLoading] = useState(false);

  // const changeHandler = (e) => {
  //   const { name, value } = e.target;
  //   if (name === "fullName") {
  //     setName(value);
  //     console.log(fullName);
  //   }
  //   if (name === "email") {
  //     setEmail(value);
  //     console.log(email);
  //   }
  //   if (name === "password") {
  //     setPassword(value);
  //     console.log(password);
  //   }
  // };

  // const sumbitHandler = (e) => {
  //   e.preventDefault();
  //   setLoading(true);

  //   setTimeout(() => {
  //     const data = { fullName, email, password };
  //     console.log(data);
  //     setLoading(false);
  //   }, 5000);
  // };
  // console.log(loading);


  
    // async function RegisterHandler() {
    //   // submit the record to server via api call
    //   const {email, password, username} = value;
    //   // console.log(email, password, username);
    //   SetIsLoading ((prev) => ({
    //     ...prev,
    //       register: true,
    //   }));
    //   const registeredUser = await registerReq (email, password, username);
    //   console.log(registeredUser);
    //   if (registeredUser) {
    //     setIsRegistered(true);
    //     SetIsLoading((prev) => ({
    //       ...prev,
    //       register: false,
    //     }));
    //   }
      
    // };
  
   const [email, setEmail] = useState("");
  const [errors, setErrors] = useState({});
  const handleSubmit = (e) => {
    e.preventDefault();
    // Validate the email address on the client side
    if (!validateEmail(email)) {
      setErrors({ email: "Please enter a valid email address" });
      return;
    }
    // Send the email address to the server for validation
    fetch("http://localhost:4000/post", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          // The email address was successfully registered
          console.log("Email address successfully registered");
        } else {
          // The email address was already registered
          setErrors({ email: "Email address already registered" });
        }
      })
      .catch((error) => {
        // An error occurred
        console.error(error);
      });

  return (
    <div className={styles.section}>
      <div className={styles.pics}>
        <img src="./cartimage.png" alt="cart" />
      </div>
      <div className={styles.form}>
        <b>Create an account</b>
        <p>Enter your details below</p>
        {/* <form onSubmit={sumbitHandler}>
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
        </form> */}
     
  <div>
    <Formik
      initialValues={{ email: '', password: '' }}
      validate={values => {
        const errors = {};
        if (!values.email) {
          errors.email = 'Required';
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        ) {
          errors.email = 'Invalid email address';
        }
        return errors;
      }}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >
      {({ isSubmitting }) => (
        <Form>
          <Field type="name" name="name" placeholder="Name" />
          <ErrorMessage name="name" component="div" />
          <Field type="email" name="email" placeholder="Email" />
          <ErrorMessage name="email" component="div" />
          <Field type="password" name="password" placeholder="Password" />
          <ErrorMessage name="password" component="div" />
          <button className={styles.account} type="submit" disabled={isSubmitting}>
            Submit
          </button>
        </Form>
      )}
    </Formik>
  </div>


        <div className={styles.google}>
          <button>
            <FcGoogle />
            Sign up with Google
          </button>
        </div>
        <p className={styles.log}>
          Already have account? <NavLink to="/Login">
            Login
          </NavLink>
        </p>
      </div>
    </div>
  );
      }
};

export default Signupcomp;
