import React from 'react'
import BoxTop from '../BoxTop/BoxTop'
import Box from '../Box/Box'
import styles from './Hero.module.css'


const Hero = () => {
   
  return (
    <div className={styles.container}>
      <BoxTop/>
      <Box  />
      {/* <BoxTop2/> */}
      <div className={styles.box2}>
      {/* <Box2 /> */}
      </div>
      
    
    </div>
  )
}

export default Hero
