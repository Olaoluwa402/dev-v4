import React from "react";
import Navigation from "../Navigation/Navigation";
import Footer from "../Footer/Footer";
import SideBar from "../SiderBar/SideBar";

import styles from "./Layout.module.css";
const Layout = ({ children }) => {
  const open = false;
  return (
    <div className={styles.container}>
      <Navigation />
      {open && <SideBar />}
      <main className={styles.main}>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
