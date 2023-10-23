import React from "react";
import listStyle from "./ListComponent.module.css";

const ListComponent = ({ children }) => {
  return (
    <li className={listStyle.list}>{children ? children : "List item"}</li>
  );
};

export default ListComponent;
