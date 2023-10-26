import React from 'react'
import { Link } from 'react-router-dom'
import styles from "./Categories.module.css"
import MomentStyled from "../MomentStyled/MomentStyled"


const Categories = () => {
  return (
<>
<div className={styles.black_container}>
     <div className={styles.inner_flexed}>
         <p>categories</p>
       <div><h1>Enhance Your <br /> Music Experience</h1></div>
       <MomentStyled />

       <Link to="/Shop">
         <div className={styles.link}>
           <button className={styles.btn}>Buy now</button>
         </div>
       </Link>
     </div>
    <img src="./e-images/JBL_BOOM.svg" alt="" />
   </div>
</>
  )
}

export default Categories
