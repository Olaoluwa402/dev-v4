import React from "react";
import styles from "./hero.module.css"; 
import ButtonStyled from "../Button/Button";
import Button from "../Button/Button";

const Hero = () => {
  return (
    <div className={styles.container}>
      <div className={styles.hero_left}>
        <img src="https://images.pexels.com/photos/1054218/pexels-photo-1054218.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
      </div>
      <div className={styles.hero_right}>
        <h2>We Ball Hard and Wild.</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure architecto eaque aliquid a, maiores atque sed nesciunt. Voluptates, facere aspernatur. Impedit culpa cum dolorem reprehenderit esse voluptates explicabo, earum in.
          
        </p>
        <ButtonStyled color="white" bgColor="green">
          our list
        </ButtonStyled>
        <ButtonStyled color="white" bgColor="purple" text = "yes we can">
          
          our list
        </ButtonStyled>

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
