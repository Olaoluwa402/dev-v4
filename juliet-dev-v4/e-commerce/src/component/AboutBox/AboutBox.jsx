import React from "react";
import styles from "./AboutBox.module.css";
import { GiFamilyHouse } from "react-icons/gi";
import { PiCurrencyCircleDollar } from "react-icons/pi";
import { LuShoppingBag } from "react-icons/lu";
import { TbMoneybag } from "react-icons/tb";

const iconMap = {
  GiFamilyHouse: GiFamilyHouse,
  PiCurrencyCircleDollar: PiCurrencyCircleDollar,
  LuShoppingBag: LuShoppingBag,
  TbMoneybag: TbMoneybag,
};

function AboutBox({ box }) {
  const { img, texth1, textp } = box;
  const IconComponent = iconMap[img];
  return (
    <div className={styles.AboutBox_outer}>
      <div className={styles.outer_div}>
        <div className={styles.outer_circle}>
          <div className={styles.inner_circle}>
            <IconComponent className={styles.iconss} />
          </div>
        </div>
        <div className={styles.text}>
          <h1>{texth1}</h1>
          <p>{textp}</p>
        </div>
      </div>
    </div>
  );
}

export default AboutBox;
