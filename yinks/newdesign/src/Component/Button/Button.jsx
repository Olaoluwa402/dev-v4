import React from 'react'
import styles from '../Button/Button.module.css'


const Button = ({ color, bgColor, text,width }) => {
  return (
    <button
      className={styles.btn}
      style={{ color: color, backgroundColor: bgColor, width:width }}
    >
      {text ? text : " Move all to blog"}
    </button>
  );
};

export default Button