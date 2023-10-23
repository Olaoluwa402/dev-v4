import React from "react";
import Footer from "../components/Footer/Footer";
import Blog from "../components/Blog/Blog";
import Navigation from "../components/Navigation/Navigation";
import Advert from "../components/Advert/Advert";
import Hero from "../components/Hero/Hero";
import Products from "../components/Products/Products";



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

  const productData = [
    {
      id : Math.floor(Math.random() * 1000),
      title:"Gucci Duffle Bag",
      image:"https://res.cloudinary.com/dfeyofjln/image/upload/v1692172728/guccibag_jmaqgc.png",
      price:"960",
    },]

 
  return (
 <div>
   
   <Advert/>
   <Navigation/>  
   <Products productData={productData}/> 
   <Hero/>
   <Blog blogData= {blogData}/>
  <Footer/>
 </div>
  );
};

export default HomePage;
