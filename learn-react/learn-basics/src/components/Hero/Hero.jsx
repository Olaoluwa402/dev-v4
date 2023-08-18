import React from "react";
//import bg from "../../assets/images/";

import styles from "./Hero.module.css";
import Button from "../Button/Button";
import { ButtonStyled } from "../ButtonStyled";

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
        <ButtonStyled color="red" bgColor="green">
          our list
        </ButtonStyled>

        <ButtonStyled color="white" bgColor="purple">
          our list
        </ButtonStyled>

        {/* button component */}
        <Button
          text="our services"
          color="var(--black90)"
          bgColor="var(--white90)"
        />

        <Button
          text="our jobs"
          color="var(--white90)"
          bgColor="var(--brown100)"
        />
      </div>
    </div>
  );
};

export default Hero;
