import React from "react";
import Navigation from "../../Component/Navigation/Navigation";
import Hero from "../../Component/Hero/Hero";

import Footer from "../../Component/Footer/Footer";


import styles from "./Home.css";
const HomeScreen = () => {
  return (
    <div>
      <section className={styles.container}>
        {/* navigation */}
        <Navigation />
        {/* hero */}
        <Hero />

      </section>
      
      {/* footer */}
      <Footer />
      
    </div>
  );
};

export default HomeScreen;
