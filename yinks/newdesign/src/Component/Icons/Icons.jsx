import React from 'react'
import {FaRegTrashAlt} from "react-icons/fa";
import Styles from "../Icons/Icons.module.css"

const Icons = () => { 
  return (
    <div className={Styles.Icons}>
      <FaRegTrashAlt className={Styles.icons}/>
    </div>
  )
}

export default Icons