import React from "react";
import Nav from "../navigation/nav";
import Footer from "../footer/footer";
import layout from "./Layout.module.css";

function Layout({ children }) {
  return (
    <div>
      <header className={layout.header}>
        <Nav />
      </header>
      <main className={layout.main}>{children}</main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default Layout;
