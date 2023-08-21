import React from "react";
import form from "./form.module.css";

function Form() {
  return (
    <div className={form.div}>
      <div>
        <h4>Subscribe</h4>
        <p>Sign up with your email address to receive news and updates.</p>
        <form action="">
          <input type="text" placeholder="First name" />
          <input type="text" placeholder="Last name" />
          <input type="email" placeholder="Email" />
        </form>
        <button type="submit" className={form.button}>
          Subscribe
        </button>
      </div>
    </div>
  );
}

export default Form;
