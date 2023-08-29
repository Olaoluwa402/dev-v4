import React from 'react'
import logo from './logo.svg';
import {FaHtml5,FaCss3Alt} from "react-icons/fa"
import {TbBrandJavascript} from "react-icons/tb"
import styles from './Logos.module.css'

const Logos = () => {
    const logoStyle ={
        fontSize: "200px",
        color: '#ff5722'
    }
    const logo1Style ={
        fontSize: "200px",
        color: '#2196f3'
    }

    const logo2Style ={
        fontSize: "200px",
        color: '#ffeb3b'
    }
  return (
     <div className={styles.Logos}>
        <FaHtml5 style={logoStyle}/>
        <FaCss3Alt style={logo1Style}/>
        <TbBrandJavascript style={logo2Style}/>
         <img src={logo} className="App-logo" alt="logo" />
    </div>
  )
}

export default Logos