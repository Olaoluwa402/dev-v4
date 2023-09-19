import React from 'react'
import styles from './Gadgets.module.css';
import {BsTelephoneFill} from 'react-icons/bs';
import {FiTablet} from 'react-icons/fi';
import {HiDesktopComputer} from 'react-icons/hi';

const Gadgets = () => {
  return (
    <div className={styles.container}>
      <div className={styles.box}>
        <HiDesktopComputer />
        <b>Desktop</b>
        <span>63%</span>
      </div>
      <div className={styles.box}>
        <FiTablet />
        <b>Tablet</b>
        <span>15%</span>
      </div>
      <div className={styles.box}>
        <BsTelephoneFill />
        <b>Phone</b>
        <span>22%</span>
      </div>
    </div>
  );
}

export default Gadgets
