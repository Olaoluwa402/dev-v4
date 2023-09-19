import React from 'react';
import { FcGoogle } from 'react-icons/fc';
import styles from './Loginsect.module.css';
import { NavLink } from 'react-router-dom';
import {Formik, Form, Field, ErrorMessage} from 'formik';

const Loginsect = () => {
async function LoginHandler() {
    // submit the record to the server via api call
    const { email, password } = value;
    // console.log(email, password, username);
    setIsLoading((prev) => ({
      ...prev,
      login: true,
    }));
    const loginUser = await loginReq(email, password);

    //set use to the global context
    setUser(loginUser);
    setIsLoading((prev) => ({
      ...prev,
      login: false,
    }));
  }

  return (
   <div className={styles.section}>
      <div className={styles.pics}>
        <img src="./cartimage.png" alt="cart" />
      </div>
      <div className={styles.form}>
        <b>Log In</b>
        <p>Enter your details below</p>
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
          Don't have an account? <NavLink to="/Signup">
            Sign Up
          </NavLink>
        </p>
      </div>
    </div>
  )
}

export default Loginsect
