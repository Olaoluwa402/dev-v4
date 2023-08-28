import React from "react";
import styles from "./Header.module.css";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { TbBrandJavascript } from "react-icons/tb";
import { BiLogoReact } from "react-icons/bi";

function Header() {
  const iconstyle = {
    fontSize: "100px",
    color: "Red",
  };

  const iconstyle1 = {
    fontSize: "100px",
    color: "Blue",
  };

  const iconstyle2 = {
    fontSize: "100px",
    color: "Yellow",
  };

  const iconstyle3 = {
    fontSize: "100px",
    color: "skyblue",
  };

  return (
    <section >
      <div>
        <p className={styles.frontend}>Front End Technologies</p>
        <span>
          <FaHtml5 style={iconstyle} />
        </span>
        <span>
          <FaCss3Alt style={iconstyle1} />
        </span>
        <span>
          <TbBrandJavascript style={iconstyle2} />
        </span>
        <span>
          <BiLogoReact style={iconstyle3} />
        </span>
      </div>
    </section>
  );
}

export default Header;
