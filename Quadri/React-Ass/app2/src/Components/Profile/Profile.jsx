import React from "react";
import styles from "./Profile.module.css"
import{MdVerified} from "react-icons/md"
import {BiTimeFive} from "react-icons/bi"
import Button from "../Button/Button";

const Profile=()=>{
    return(
        <div className={styles.profile}>
            <div className={styles.profile_img}>
                <img src="https://res.cloudinary.com/di9r3toow/image/upload/v1692585515/image-removebg-preview_2_xgxkbe.png" alt="" />
                <span id={styles.span}>
                    <h6>Asabeneh Yetayeh</h6>
                    <a href="/"><MdVerified/></a>
                </span>
                <p>Senior Developer, Finland</p>
                <h5>Skills</h5>

                <span id={styles.skills_btn}>
                    <Button
                    text="HTML"
                    backgroundColor="lightseagreen"
                    color="white"
                    />
                     <Button
                    text="CSS"
                    backgroundColor="lightseagreen"
                    color="white"
                    />
                     <Button
                    text="Sass"
                    backgroundColor="lightseagreen"
                    color="white"
                    />
                     <Button
                    text="JS"
                    backgroundColor="lightseagreen"
                    color="white"
                    />
                     <Button
                    text="React"
                    backgroundColor="lightseagreen"
                    color="white"
                    />
                     <Button
                    text="Redux"
                    backgroundColor="lightseagreen"
                    color="white"
                    />

                    <Button
                    text="Node"
                    backgroundColor="lightseagreen"
                    color="white"
                    />
                     <Button
                    text="MongoDB"
                    backgroundColor="lightseagreen"
                    color="white"
                    />
                     <Button
                    text="Python"
                    backgroundColor="lightseagreen"
                    color="white"
                    />
                     <Button
                    text="Flask"
                    backgroundColor="lightseagreen"
                    color="white"
                    />
                     <Button
                    text="Django"
                    backgroundColor="lightseagreen"
                    color="white"
                    />
                     <Button
                    text="Numpay"
                    backgroundColor="lightseagreen"
                    color="white"
                    />
                     <Button
                    text="Pandas"
                    backgroundColor="lightseagreen"
                    color="white"
                    />
                    <br />
                     <Button
                    text="HTML"
                    backgroundColor="lightseagreen"
                    color="white"
                    />
                     <Button
                    text="Data Analysis"
                    backgroundColor="lightseagreen"
                    color="white"
                    />
                     <Button
                    text="MYSQl"
                    backgroundColor="lightseagreen"
                    color="white"
                    />
                     <Button
                    text="GraphQL"
                    backgroundColor="lightseagreen"
                    color="white"
                    />
                     <Button
                    text="Git"
                    backgroundColor="lightseagreen"
                    color="white"
                    />
                     <Button
                    text="Gatsby"
                    backgroundColor="lightseagreen"
                    color="white"
                    />
                </span>

                <span id={styles.duration}>
                <BiTimeFive/>
                <p>Joined on Aug 30, 2020</p>
                </span>

            </div>
        </div>
    );
};

export default Profile