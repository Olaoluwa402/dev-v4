import React from "react";
import carousel from "./Carousel.module.css";
import { Link } from "react-router-dom";

const Carousel = () => {
  return (
    <div className={carousel.listCarouselContainer}>
      <ul>
        <li>Home</li>
        <li>Home</li>
        <li>Home</li>
        <li>Home</li>
        <li>Home</li>
        <li>Home</li>
        <li>Home</li>
        <li>Home</li>
        <li>Home</li>
      </ul>
      <div className={carousel.slideContainer}>
        <div className={carousel.slide}>
          <div>
            <div>
              <img src="" alt="" />
              <span>iPhone 14 Series</span>
            </div>
            <h1>Up to 10% off Voucher</h1>
            <Link to={"/"}>
              <p className={carousel.shopBtn}>Shop Now</p>
            </Link>
          </div>
          <img src="assets/home-assets/hero_carousel_phone.png" alt="" />
        </div>
        <div className={carousel.buttonContainer}>
          <button></button>
          <button></button>
          <button></button>
          <button></button>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
