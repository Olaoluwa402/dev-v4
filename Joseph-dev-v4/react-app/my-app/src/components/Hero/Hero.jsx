import React from "react";

import styles from "./Hero.module.css";
import Button from "../Button/Button";
import { ButtonStyled } from "../ButtonStyled";

const Hero = () => {
  return (
    <div className= {styles.wishlist}>
    <div id="wishlist1">
        <h4>Wishlist (4)</h4>
        <button><a href="#">Move All To Bag</a></button>
    </div>
    <div className={styles.wishlist_container}>
        <div className={styles.wishlistbox}>
            <div className={styles.topbox}>
                <div class="image">
                    <img src="./Exclusive Assets/Discount percent.png" />
                </div>
                <div className={styles.topbox_img}>
                    <a href="#"><img src="./Exclusive Assets/icon-delete.png" /></a>
                </div>

                <div className={styles.wislist_image}>
                    <img src="./Exclusive Assets/guccibag.png" />
                </div>
            </div>
            <div className={styles.addtocart}>
                <img src="./Excl
                usive Assets/Cart1.png" />
                <a href="#">
                    <p>Add to Cart</p>
                </a>
            </div>
            <div className={styles.wishlistitems}>
                <h4>Gucci duffle bag</h4>
                <div class="prices">
                    <p>$960</p>
                    <h5>$1160</h5>
                </div>
            </div>
        </div>
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
    </div>
  );
};

export default Hero;
