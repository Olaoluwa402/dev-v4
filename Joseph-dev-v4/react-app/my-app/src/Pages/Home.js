import React from "react";
import Footer from "../components/Footer/Footer";
import Blog from "../components/Blog/Blog";
import Navigation from "../components/Navigation/Navigation";
import Advert from "../components/Advert/Advert";
import Hero from "../components/Hero/Hero";


const HomePage = () =>  {
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
   <Advert/>
   <Navigation/>
   <Hero/>
   <Blog blogData= {blogData}/>
  <Footer/>
 </div>
  );
};

export default HomePage;
