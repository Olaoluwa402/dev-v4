import React from "react";
import Navigation from "../Navigation/Navigation";
import Footer from "../Footer/Footer";

function layout({ children }) {
  return (
    <div>
      <Navigation />
      <main>{children}</main>
      <Footer />
    </div>
  );
}

export default layout;
