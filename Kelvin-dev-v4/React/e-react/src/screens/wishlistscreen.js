import React from "react";
import Nav from "../components/navigation/nav";
import Wishlist from "../components/wishlist/wishlist";
import Fyp from "../components/fypList/fyp";
import Footer from "../components/footer/footer";

function Wishlistscreen() {
  return (
    <div>
      <Nav />
      <Wishlist />
      <Fyp />
      <Footer />
    </div>
  );
}

export default Wishlistscreen;
