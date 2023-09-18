import React from "react";
// import FormImg from "../Assets/signin-assets/SiseImage.png";
import Input from "../formInput/Input";
import Form from "../Forms.module.css";

function SigninForm() {
  return (
    <div className={Form.sign_container}>
      {/* <FormImg className={signin.sideimg} /> */}
      <img
        src="/Assets/signin-assets/SideImage.png"
        alt="sign in or register image"
        className={Form.sideimg}
      />
      <form>
        <div>
          <h1>Log in to Exclusive</h1>
          <p>Enter your details below</p>
        </div>
        <Input type="Email" placehold="Email or phone number" />
        <Input type="Password" placehold="Password" />
        <div className={Form.btnContainer_in}>
          <button className={Form.btn1_in} type="submit">
            Log in
          </button>
          <a href="">Forget Password?</a>
        </div>
      </form>
    </div>
  );
}

export default SigninForm;
