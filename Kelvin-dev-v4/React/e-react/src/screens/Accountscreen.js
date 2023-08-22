import React from "react";
import Nav from "../components/navigation/nav";
import Footer from "../components/footer/footer";
import SignupForm from "../components/forms/signupForm/SignupForm";
import SigninForm from "../components/forms/signinForm/SigninForm";

function Accountscreen() {
  return (
    <div>
      <Nav />
      <SignupForm />
      <SigninForm />
      <Footer />
    </div>
  );
}

export default Accountscreen;
