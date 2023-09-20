import React from "react";
import Navigation from "../../component/Navigation/navigation.jsx";
import Blog from "../../component/Blog/blog.jsx";
import Hero from "../../component/Hero/hero.jsx";
import Footer from "../../component/Footer/footer.jsx";
import styles from "./home.module.css"

const HomeScreen = () => {
  return (
    <div>
      <section className={styles.header}>
      {/* navigation */}
      <Navigation />
      {/* Hero */}
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
