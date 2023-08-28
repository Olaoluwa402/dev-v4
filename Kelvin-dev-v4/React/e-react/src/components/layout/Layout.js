import React from "react";
import Nav from "../navigation/nav";
import Footer from "../footer/footer";

function Layout({ children }) {
  return (
    <div>
      <Nav />
      <main>{children}</main>
      <Footer />
    </div>
  );
}

export default Layout;
