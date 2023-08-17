import React from "react";
import Navigation from "../components/Navigation/Navigation";
import Hero from "../components/Hero/Hero";
import Blog from "../components/Blog/Blog";
import Footer from "../components/Footer/Footer";

import styles from "./Home.module.css";
const HomeScreen = () => {
  const blogData = [
    {
      id: Math.floor(Math.random() * 1000),
      title: "blog title one",
      desc: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, explicabo?",
    },
    {
      id: Math.floor(Math.random() * 1000),
      title: "blog title two",
      desc: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, explicabo?",
    },
    {
      id: Math.floor(Math.random() * 1000),
      title: "blog title three",
      desc: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, explicabo?",
    },
    {
      id: Math.floor(Math.random() * 1000),
      title: "blog title three",
      desc: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, explicabo?",
    },
    {
      id: Math.floor(Math.random() * 1000),
      title: "blog title three",
      desc: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, explicabo?",
    },
    {
      id: Math.floor(Math.random() * 1000),
      title: "blog title three",
      desc: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, explicabo?",
    },
    {
      id: Math.floor(Math.random() * 1000),
      title: "blog title three",
      desc: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, explicabo?",
    },
  ];
  return (
    <div>
      <section className={styles.header}>
        {/* navigation */}
        <Navigation title="our navigation" />
        {/* hero */}
        <Hero />
      </section>
      {/* blog */}
      <Blog blogData={blogData} />
      {/* footer */}
      <Footer />
    </div>
  );
};

export default HomeScreen;
