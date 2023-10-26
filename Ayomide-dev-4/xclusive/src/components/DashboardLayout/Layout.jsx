import React from 'react';
import Header from '../DashboardLayout/Header/Header';
import Sidebar from '../DashboardLayout/Sidebar/Sidebar';
import {Outlet} from 'react-router-dom';
import styles from './Layout.module.css';

const Layout = () => {
    return (
      <div className={styles.Main}>
        <div className={styles.Side}>
          <Sidebar />
        </div>
        <div className={styles.Hero}>
          <div className={styles.Head}>
            <Header />
          </div>
          <div className={styles.Content}>
            <main><Outlet /></main>
          </div>
        </div>
      </div>
    );
}
 
export default Layout;