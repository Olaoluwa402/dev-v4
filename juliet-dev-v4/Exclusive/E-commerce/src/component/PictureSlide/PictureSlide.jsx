import React, { useState } from 'react';
import styles from "./PictureSlide.module.css"

const images = [
  './e-images/hero_phone 2.svg',
  './e-images/iphone14pro.jpeg',
  './e-images/blackiphone.jpeg',
  './e-images/i945.webp',
  './e-images/backiphone.jpeg',
];

function PictureSlide() {
  const [currentIndex, setCurrentIndex] = useState(0);




  // const nextSlide = () => {
  //   setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  // };

  // const prevSlide = () =>{
  //   setCurrentIndex((prevIndex) => (prevIndex ===  0 ? images.length - 1 : prevIndex - 1));
  // };

const nextSlide = () => {
  setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
};



const prevSlide = () => {
  setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
};

  return (
    <div className={styles.picture_slide}>
     
      <img src={images[currentIndex]} alt='' />
      <div className={styles.btn}>
      <button onClick={nextSlide}></button>
      <button onClick={nextSlide}></button>
      <button onClick={nextSlide}></button>
      <button onClick={nextSlide}></button>
      <button onClick={prevSlide}></button>
      </div>
    
    </div>
  );
}

export default PictureSlide;
