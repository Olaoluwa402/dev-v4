import React from 'react'
import Styles from "../Header/Header.module.css";
import { FaSistrix, FaHeart,FaUserAlt,FaShoppingCart} from "react-icons/fa";
import {NavLink} from "react-router-dom";


function Header() {
  return (
    <div className={Styles.Header}>
    <nav className={Styles.navigation}>
     <div>
      <ul>
      <h1>Exclusive</h1>
      </ul>
     </div>
     <nav className={Styles.wrapper}>
      <div>
        <ul>
          <li>
          
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
      
            <NavLink to="/about">About</NavLink>
          </li>
          <li>
        
            <NavLink to ="/">Contact</NavLink>
          </li>
          <li>
       <NavLink to="/Signup">Signup</NavLink>
          </li>

      
          <li>
        <NavLink to="/photos">photos</NavLink>
        </li>

        <li>
          <NavLink to="/dashboard"r>Dashboard</NavLink>
          </li>
        </ul>
      </div>
    </nav>
<div>
  <ul>
    <input type="text" placeholder='what are you looking for?'
  
    />
       <FaSistrix/>

  <FaHeart/>
  <FaShoppingCart/>
  <FaUserAlt/>

  </ul>
</div>


    </nav>
    </div>
  )
}

export default Header