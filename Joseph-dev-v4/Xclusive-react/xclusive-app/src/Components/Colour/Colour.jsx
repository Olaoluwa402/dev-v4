import React from 'react'
import styles from './Colour.module.css'

const Colour = () => {

    // for (let i=0; i <=50; i++ ){
    //     const box = document.createElement("div");
    //     box.classList.add("box");
    //     document.querySelector(".container").appendChild(box);
    // }

  return (
    <div className={styles.outter_container}> 
      <div className={styles.btn}>Change Colours</div>
      <div className={styles.container}></div>
    </div>
  )

}

export default Colour
