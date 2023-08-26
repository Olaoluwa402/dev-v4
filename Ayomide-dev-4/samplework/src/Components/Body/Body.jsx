import React from "react";
import styles from "./Body.module.css";
import { BsClock } from "react-icons/bs";
import {LuVerified} from "react-icons/lu";

function Body() {

    const iconstyle = {
      color: "aquamarine"
    };

  return (
    <div className={styles.container}>
      <section className={styles.container1}>
        <div className={styles.box}>
          <div className={styles.circular}>
            <img src="myimage.jpg" alt="" />
          </div>
          <h4>
            DEBORAH SMITH <LuVerified style={iconstyle} />
          </h4>
          <p>Senior Developer, USA</p>
        </div>
        <div className={styles.container2}>
          <p>SKILLS</p>
          <h4 className={styles.skills}>
            <button>HTML</button>
            <button>HTML</button>
            <button>CSS</button>
            <button>Sass</button>
            <button>JS</button>
            <button>React</button>
            <button>Redux</button>
            <button>Node</button>
            <button>MongoDB</button>
            <button>Python</button>
            <button>Django</button>
            <button>Numpy</button>
            <button>Pandas</button>
            <button>Data Analysis</button>
            <button>MYSQL</button>
            <button>GraphQL</button>
            <button>D3.js</button>
            <button>Gatsby</button>
            <button>Docker</button>
            <button>Heroku</button>
            <button>Git</button>
          </h4>
        </div>
        <div className={styles.container4}>
          <p>
            <BsClock /> Joined on Aug 30,2020
          </p>
        </div>
      </section>
    </div>
  );
}

export default Body;
