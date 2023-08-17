import React from "react";
import Navigation from "../components/Navigation/Navigation";
import Hero from "../components/Hero/Hero";
import Blog from "../components/Blog/Blog";
import Footer from "../components/Footer/Footer";

import styles from "./Home.module.css";
const HomeScreen = () => {
  return (
    <div>
      <section className={styles.header}>
        {/* navigation */}
        <Navigation />
        {/* hero */}
        <Hero />
      </section>
      {/* blog */}
      <Blog />
      {/* footer */}
      <Footer />
    </div>
  );
};

export default HomeScreen;
