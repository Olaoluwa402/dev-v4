import React from "react";
import styles from "./AboutDirectors.module.css";
import { FiTwitter } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa";
import { RiLinkedinLine } from "react-icons/ri";
import {Link} from 'react-router-dom'

function AboutDirectors({ details }) {
  const { img, texth1, textp } = details;
  return (
    <div className={styles.container}>

      <div className={styles.AboutDirectors}>
        <div className={styles.Aboutpics}>
          <img src={img} alt="" />
        </div>
        <div>
          <h1>{texth1}</h1>
          <p>{textp}</p>
        </div>
        <div className={styles.Icons}>
        {/* <Link to='/Contact'>Contact</Link> */}
        <Link to='/'><FiTwitter className={styles.TwitterIcon} /></Link>
          <Link to='/'><FaInstagram className={styles.InstaIcon} /></Link>
          <Link to='/'><RiLinkedinLine className={styles.linkeIcon} /></Link>
        </div>
      </div>
      
    </div>
  );
}

export default AboutDirectors;
