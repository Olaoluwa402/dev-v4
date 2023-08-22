import React from "react";
import Nav from "../navigation/nav";
import Footer from "../footer/footer";

function Layout({ child }) {
  return (
    <div>
      <Nav />
      <main>{child}</main>
      <Footer />
    </div>
  );
}

export default Layout;
