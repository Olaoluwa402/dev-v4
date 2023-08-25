import React from 'react'


import styles from './Box2.module.css'
import Box from '../Box/Box'
import Rating from '../Ratting/Rating'

const Box2 = () => {
  return (
<div className={styles.container}>
    <Box/>
    <Rating/>
 </div>
  )
}

export default Box2