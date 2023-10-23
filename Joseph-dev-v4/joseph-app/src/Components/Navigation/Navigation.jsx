import React from 'react'
import styles from './Navigation.module.css'
import { Link } from 'react-router-dom'

const Navigation = () => {
  return (
    <div className={styles.container}>
        <ul className={styles.nav_ul}>
        <li> <Link to={"/"}>Home</Link></li>
        <li> <Link to={"/contact"}>Contact</Link></li>
        <li> <Link to={"/about"}>About</Link></li>
        <li> <Link to="/services">Services</Link></li>
        <li> <Link to="/apps">Apps</Link></li>
      </ul>
    </div>
  )
}

export default Navigation
