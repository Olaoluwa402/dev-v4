import React from "react";
import Topbar from "./Topbar/Topbar";
import SideBar from "./Sidebar/Sidebar";
import { Outlet } from "react-router-dom";
import styles from "./Layout.module.css";

const Layout = () => {
  return (
    <div className={styles.container}>
      {/* layout */}
      <div className={styles.topbar}>
        <Topbar />
      </div>

      <div className={styles.sidebar}>
        <SideBar />
      </div>
      <main className={styles.main}>{<Outlet />}</main>
    </div>
  );
};

export default Layout;
