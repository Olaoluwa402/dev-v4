import React from 'react'
import { Link } from 'react-router-dom'
import styles from "./Sidebar.module.css"
import Icons from '../../Icons/Icons'

const Sidebar = () => {
  return (
    <div className={styles.container}>

 <div>
  <h1>Devias <br></br><span>product</span></h1>
  
  <div>

  </div>
 </div>
      <nav>
        <ul>
          <li>
            <Link to="/dashboard/notifications">Overview</Link>
          </li>

          <li>
            <Link to="/dashboard/users">Customers</Link>
          </li>
          <li>
            <Link to="/dashboard/users">Account</Link>
          </li>
          <li>
            <Link to="/dashboard/users">Setting</Link>
          </li>
          <li>
            <Link to="/dashboard/users">Login</Link>
          </li>
          <li>
            <Link to="/dashboard/users">Register</Link>
          </li>
          <li>
            <Link to="/dashboard/users">Error</Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Sidebar