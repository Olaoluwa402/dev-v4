import React from 'react'
import styles from './AboutDelivery.module.css'
import { TbTruckDelivery,TbHeadset } from 'react-icons/tb'
import { LuShieldCheck } from 'react-icons/lu'


const iconMaped ={
  TbTruckDelivery:TbTruckDelivery,
  TbHeadset:TbHeadset,
  LuShieldCheck:LuShieldCheck
}

function AboutDelivery({icons}) {
  const { img, texth3, textp } = icons;
  const IconComp = iconMaped[img];
  return (
    <div>
        <div className={styles.AboutBox_outerD}>
      <div className={styles.outer_div}>
        <div className={styles.outer_circle}>
          <div className={styles.inner_circle}>
            < IconComp className={styles.iconss} />
          </div>
        </div>
        <div className={styles.text}>
          <h3>{texth3}</h3>
          <p>{textp}</p>
        </div>
      </div>
    </div>
    </div>
  )
}

export default AboutDelivery