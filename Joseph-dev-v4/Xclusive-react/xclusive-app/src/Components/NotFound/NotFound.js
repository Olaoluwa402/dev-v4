import React from "react";
import styles from './NotFound.module.css'
import Advert from "../Advert/Advert";
import Navigation from "../Navigation/Navigation";
import Button from "../Button/Button";
import Footer from "../Footer/Footer";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className={styles.container}>
        <Advert/>
        {/* <Navigation /> */}
        <div className={styles.error}>
          <h2>
          404 Not Found
          </h2>
          <p>Your visited page not found. You may need to go to home page.</p>
          <Link to={"/"}> <Button 
          text="Back to home page"
          color="#FAFAFA"
          bgColor="#DB4444"
        /></Link>
        </div>
        <Footer/>   
    </div>
  );
};

export default NotFound;