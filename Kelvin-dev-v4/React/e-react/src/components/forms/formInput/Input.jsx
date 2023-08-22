import React from "react";
import input from "./Input.module.css";

function Input({ type, placehold, name, value }) {
  return (
    <input
      type={type}
      placeholder={placehold}
      name={name}
      value={value}
      className={input.field}
    />
  );
}

export default Input;
