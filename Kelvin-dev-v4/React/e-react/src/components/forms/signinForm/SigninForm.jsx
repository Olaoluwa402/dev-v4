import React from "react";
import FormImg from "../formImg/FormImg";
import Input from "../formInput/Input";
import signin from "./SigninForm.module.css";

function SigninForm() {
  return (
    <div className={signin.signin_container}>
      <FormImg className={signin.sideimg} />
      <form>
        <div>
          <h1>Log in to Exclusive</h1>
          <p>Enter your details below</p>
        </div>
        <Input type="Email" placehold="Email or phone number" />
        <Input type="Password" placehold="Password" />
        <div className={signin.btnContainer}>
          <button className={signin.btn1} type="submit">
            Log in
          </button>
          <a href="">Forget Password?</a>
        </div>
      </form>
    </div>
  );
}

export default SigninForm;
