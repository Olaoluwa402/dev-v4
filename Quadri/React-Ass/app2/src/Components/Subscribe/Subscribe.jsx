import React from "react";
import styles from "./Subscribe.module.css"
import Input from "../Input/Input";
import Button from "../Button/Button";


const Subscribe=()=>{
    return(
        <div className={styles.container}>
            <h3>Subscribe</h3>
            <p>Sign up with your email address to recieve news and update</p>
            <div className={styles.input}>
            <Input
            placeholder="First name"
            /> 
            <Input
            placeholder="Last name"
            />
            <Input
            placeholder="Email"
            />
            </div>
            <Button

            width="250px"
            backgroundColor= "lightcoral"
            color="white"
            text="Subscribe"
            
            />
        </div>
    );
};

export default Subscribe