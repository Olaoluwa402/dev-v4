import React from "react";
import Hero from "../components/Hero/Hero";
import Blog from "../components/Blog/Blog";
import {
  ClassState,
  StateManagementHook,
} from "../components/StateManagement/StateManagement";
import Forms from "../components/Forms/Forms";

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
        {/* hero */}
        <Hero />
      </section>
      {/* state */}
      <Forms />
      {/* blog */}
      <Blog blogData={blogData} />
      {/* footer */}
    </div>
  );
};

export default HomeScreen;
