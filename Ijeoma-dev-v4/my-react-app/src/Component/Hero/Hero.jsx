import React from "react";

import styles from "./Hero.css";


const Hero = () => {
  return (
    <div className={styles.container}>
      <div className={styles.hero__left}>
        <img
          src="https://images.pexels.com/photos/1054218/pexels-photo-1054218.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt=""
        />
      </div>
      <div className={styles.hero__right}>
        <h2>We bake well</h2>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem
          repellat ratione quas, laboriosam architecto tempora.
        </p>
        {/* button component */}
      
      </div>
    </div>
  );
};

export default Hero;
