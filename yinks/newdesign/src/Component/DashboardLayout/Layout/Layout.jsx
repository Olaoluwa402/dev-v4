import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from '../Sidebar/Sidebar'
import Topbar from '../Topbar/Topbar'
import styles from "./Layout.module.css"

function Layout() {
  return (
    <div className={styles.container}>
    {/* layout */}
    <div className={styles.topbar}>
    <Sidebar />
    
    </div>
   
    <div className={styles.sidebar}>
    <Topbar />
      <main className={styles.main}>{<Outlet />}</main>
    </div>
    
  </div>
  )
}

export default Layout