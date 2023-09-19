import React from 'react'
import NavBar from './NavBar/NavBar'
import SideBar from './SideBar/SideBar'
import { Outlet } from 'react-router-dom'
import styles from './Layout.module.css'

const Layout = () => {
  return (
    <div>
        <div className={styles.navbar}>
            <NavBar />
        </div>
        <div className={styles.sidebar}>
            <SideBar />
        </div>
      
      <main className={styles.main}> < Outlet /></main>
    </div>
  )
}

export default Layout
