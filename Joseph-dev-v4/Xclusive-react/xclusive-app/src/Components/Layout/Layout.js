import React from "react";
import Navigation from "../Navigation/Navigation";
import Footer from "../Footer/Footer";
// import SideBar from "../SiderBar/SideBar";
import Advert from "../Advert/Advert";
import Favourite from "../Navigation/Favourite/Favourite";
import Carticon from "../Navigation/Carticon/Carticon";
import User from "../Navigation/User/User";
import Plus from "../Navigation/Plus/Plus";

import styles from "./Layout.module.css";

const Layout = ({ Item1,Item2,Item3,Item4,children }) => {
  const open = false;
  return (
    <div className={styles.container}>
      <Advert />
      <Navigation Item1={Item1} Item2={Item2} Item3={Item3} Item4={Item4} />
      {/* {open && <SideBar />} */}
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;