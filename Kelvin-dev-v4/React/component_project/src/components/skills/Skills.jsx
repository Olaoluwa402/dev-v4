import React from "react";
import skills from "./skills.module.css";
var path = process.env.PUBLIC_URL;
var html = "/assets/html.png";
var css = "/assets/css.png";
var js = "/assets/js.png";
var react = "/assets/react.png";

function Skills() {
  return (
    <section>
      <h5>Frontend Technologies</h5>
      <div className={skills.div}>
        <img src={path + html} alt="" />
        <img src={path + css} alt="" />
        <img src={path + js} alt="" />
        <img src={path + react} alt="" />
      </div>
    </section>
  );
}

export default Skills;
