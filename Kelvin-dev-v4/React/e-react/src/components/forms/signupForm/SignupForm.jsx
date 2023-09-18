import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Input from "../formInput/Input";
import Form from "../Forms.module.css";

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
    <div className={Form.sign_container}>
      <img
        src="/Assets/signin-assets/SideImage.png"
        alt="sign in or register image"
        className={Form.sideimg}
      />
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
          changeFunc={changeFunc}
        />
        <Input
          type="Email"
          placehold="Email or phone number"
          name="email"
          value={email}
          changeFunc={changeFunc}
        />
        <Input
          type="Password"
          placehold="Password"
          name="password"
          value={password}
          changeFunc={changeFunc}
        />
        <div className={Form.btnContainer}>
          <button className={Form.btn1} type="submit">
            Create Account
          </button>
          <button className={Form.btn2}>Sign up with Google</button>
        </div>
        <p>
          Already have account? <NavLink to={"/loginscreen"}>Log in</NavLink>
        </p>
      </form>
    </div>
  );
}

export default SignupForm;
