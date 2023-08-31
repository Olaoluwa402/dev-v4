import React from 'react'
import styles from './SideBar.module.css'
import {HiSelector} from 'react-icons/hi'
import {LiaSignalSolid} from 'react-icons/lia'
import {HiUsers} from 'react-icons/hi'
import { NavLink } from 'react-router-dom'

const SideBar = () => {
  return (
    <div className={styles.container}>
        <div id={styles.logo}>
            <img src='https://res.cloudinary.com/dfeyofjln/image/upload/v1692172726/2OC_logo-removebg-preview_q75nqy.png'/>
        </div>
        <div id={styles.header}>
            <div className={styles.headertxt}>
             <h4>Devias</h4>
             <p>Production</p>
            </div>
            <div id={styles.selector}>
             <HiSelector />
            </div>
        </div>

        <ul>
           <NavLink to ={"/dashboard/overview"}><li>
            <LiaSignalSolid className={styles.icon} />
            <span>Overview</span>
            </li></NavLink>
           <NavLink to ={"/dashboard/customer"}><li>
            <HiUsers className={styles.icon}/>
            <span>Customers</span>
            </li></NavLink>
           <NavLink to ={"/"}><li>
            <LiaSignalSolid className={styles.icon}/>
            <span>Companies</span>
            </li></NavLink>
           <NavLink to ={"/"}><li>
            <LiaSignalSolid className={styles.icon}/>
            <span>Account</span>
            </li></NavLink>
           <NavLink to ={"/"}><li>
            <LiaSignalSolid className={styles.icon}/>
            <span>Settings</span>
            </li></NavLink>
           <NavLink to ={"/"}><li>
            <LiaSignalSolid className={styles.icon}/>
            <span>Login</span>
            </li></NavLink>
           <NavLink to ={"/"}><li>
            <LiaSignalSolid className={styles.icon}/>
            <span>Register</span>
            </li></NavLink>
           <NavLink to ={"/"}><li>
            <LiaSignalSolid className={styles.icon}/>
            <span>Error</span>
            </li></NavLink>
        </ul>
      
    </div>
  )
}

export default SideBar
