import React, { useState } from "react";
import FormImg from "../formImg/FormImg";
import Input from "../formInput/Input";
import Signup from "./SignupForm.module.css";

function SignupForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullName, setFullName] = useState("");

  const changeFunc = (e) => {
    // const { name, value } = e.target;

    if (e.target.name === "email") {
      setEmail(e.target.value);
      console.log(email);
    }

    if (e.target.name === "password") {
      setPassword(e.target.value);
      console.log(password);
    }

    if (e.target.name === "name") {
      setFullName(e.target.value);
      console.log(fullName);
    }
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const data = {
      fullName,
      email,
      password,
    };

    console.log(data);
  };

  return (
    <div className={Signup.signup_container}>
      <FormImg className={Signup.sideimg} />
      <form onSubmit={submitHandler}>
        <div>
          <h1>Create an account</h1>
          <p>Enter your details below</p>
        </div>
        <Input
          type="text"
          placehold="Name"
          name="name"
          value={fullName}
          onChange={changeFunc}
        />
        <Input
          type="Email"
          placehold="Email or phone number"
          name="email"
          value={email}
          // onChange={changeFunc}
        />
        <Input
          type="Password"
          placehold="Password"
          name="password"
          value={password}
          // onChange={changeFunc}
        />
        <div className={Signup.btnContainer}>
          <button className={Signup.btn1} type="submit">
            Create Account
          </button>
          <button className={Signup.btn2}>Sign up with Google</button>
        </div>
        <p>
          Already have account? <a href="">Log in</a>
        </p>
      </form>
    </div>
  );
}

export default SignupForm;
