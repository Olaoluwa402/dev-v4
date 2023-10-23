import { React, useState } from "react";
import styles from "./HomeUl.module.css";
import { FaAngleRight } from "react-icons/fa";
import WomenFashion from "../WomenFashion/WomenFashion";
import MenFashion from "../MenFashion/MenFashion";

function HomeUl() {
  const [active, setActive] = useState("");
  return (
    <>
      <div>
        <ul className={styles.list}>
          <div className={styles.lists}>
            <ul>
              <li>Women's Fashion</li>
              {active === "WomenFashion" && <WomenFashion />}
            </ul>
            <FaAngleRight onClick={() => setActive("WomenFashion")} />
          </div>

          <div className={styles.lists}>
            <ul>
              <li>Men's Fashion</li>
              {active === "MenFashion" && <MenFashion />}
            </ul>
            <FaAngleRight onClick={() => setActive("MenFashion")} />
          </div>
          </ul>
          <ul className={styles.list}>
          <li>Electronics</li>
          <li>Home & Lifestyle</li>
          <li>Medicine</li>
          <li>Sports & Outdoor</li>
          <li>Baby's & Toys</li>
          <li>Groceries & Pets</li>
          <li>Health & Beauty</li>
        </ul>
      </div>
    </>
  );
}

export default HomeUl;
