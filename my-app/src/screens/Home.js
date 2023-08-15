import React from "react";
import Navigation from "../components/Navigation/Navigation";
import Hero from "../components/Hero/Hero";
import Blog from "../components/Blog/Blog";
import Footer from "../components/Footer/Footer";
const HomeScreen = () => {
  return (
    <div>
      {/* navigation */}
      <Navigation />
      {/* hero */}
      <Hero />
      {/* blog */}
      <Blog />
      {/* footer */}
      <Footer />
    </div>
  );
};

export default HomeScreen;
