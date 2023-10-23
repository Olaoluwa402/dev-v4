import React from 'react'
import styles from './Layout.module.css'
import Navigation from '../Navigation/Navigation';

import Footer from '../Footer/Footer';
import Sidebar from '../Sidebar/Sidebar';

    const Layout = ({ children }) => {
        const open = false;
        return (
          <div className={styles.container}>
            <Navigation />
            {open && <Sidebar />}
            <main>{children}</main>
            
            <Footer />

          </div>
        );
      };
      
      export default Layout;
