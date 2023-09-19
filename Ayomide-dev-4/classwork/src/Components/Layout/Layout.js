import React from "react";
import Navigation from "../Navigation/Navigation";
import layout from "./Layout.module.css"

import Footer from "../Footer/Footer";

const Layout = ({ children }) => {
  return (
    <div>
      <Navigation />
      <main className={layout.main}>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
