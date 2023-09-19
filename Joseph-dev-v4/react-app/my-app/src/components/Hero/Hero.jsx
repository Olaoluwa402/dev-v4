import React from "react";

import styles from "./Hero.module.css";
import Button from "../Button/Button";
import { ButtonStyled } from "../ButtonStyled";
import Products from "../Products/Products";

const Hero = () => {

  const productData = [
    {
      id : Math.floor(Math.random() * 1000),
      title:"Gucci Duffle Bag",
      image:"https://res.cloudinary.com/dfeyofjln/image/upload/v1692172728/guccibag_jmaqgc.png",
      price:"960",
      discount: "$1100"
    },
    {
      id : Math.floor(Math.random() * 1000),
      title:"Laptop",
      image:"https://res.cloudinary.com/dfeyofjln/image/upload/v1692172729/laptop_jnouoi.png",
      price:"1000",
     
  
    },
    {
      id : Math.floor(Math.random() * 1000),
      title:"Gucci Duffle Bag",
      image:"https://res.cloudinary.com/dfeyofjln/image/upload/v1692172728/jacket_gjn5dh.png",
      price:"540",
      discount: "1100"
  
    },
  
   ]
  return (

    <div className={styles.container}>

        <Products productData={productData}/>

        <ButtonStyled color="red" bgColor="green">
          our list
        </ButtonStyled>

        <ButtonStyled color="white" bgColor="purple">
          our list
        </ButtonStyled>

        {/* button component */}
        <Button
          text="About Us"
          color="var(--white100)"
          bgColor="var(--purple400)"
        />

        <Button
          text="Register"
          color="var(--white90)"
          bgColor="var(--brown100)"
        />

    </div>
  );
};

export default Hero;
