import React from "react";
import styles from "./Footer.module.css";
const Footer = () => {
  const getDate = () => {
    const date = new Date();
    const final = `${date.getFullYear()}`;
    return final;
  };
  return (
    <div className={styles.container}>
      <p>&copy; {getDate()}, MYCOMOPANY</p>
    </div>
  );
};

export default Footer;
