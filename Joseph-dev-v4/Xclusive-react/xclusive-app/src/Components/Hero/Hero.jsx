import React from 'react'
import BoxTop from '../BoxTop/BoxTop'
import Box from '../Box/Box'
import BoxTop2 from '../BoxTop2/BoxTop2'
import Box2 from '../Box2/Box2'
import styles from './Hero.module.css'


const Hero = () => {
    const boxData = [
        {
          id: Math.floor(Math.random() * 1000),
          title: "Gucci Duffle Bag",
          image: "https://res.cloudinary.com/dfeyofjln/image/upload/v1692172728/guccibag_jmaqgc.png",
          price: "$960",
          discount: "$1160"
        },
        {
          id: Math.floor(Math.random() * 1000),
          title: "Gucci Duffle Bag",
          image: "https://res.cloudinary.com/dfeyofjln/image/upload/v1692172728/guccibag_jmaqgc.png",
          price: "$960",
           discount: "$1160"
        },
        {
          id: Math.floor(Math.random() * 1000),
          title: "Gucci Duffle Bag",
          image: "https://res.cloudinary.com/dfeyofjln/image/upload/v1692172728/guccibag_jmaqgc.png",
          price: "$960",
          discount: "$1160"
        },
        {
          id: Math.floor(Math.random() * 1000),
          title: "Gucci Duffle Bag",
          image: "https://res.cloudinary.com/dfeyofjln/image/upload/v1692172728/guccibag_jmaqgc.png",
          price: "$960",
          discount: "$1160"
        }
    ]
  return (
    <div className={styles.container}>
      <BoxTop/>
      <Box />
      <BoxTop2/>
      <div className={styles.box2}>
      <Box2 boxData={boxData}/>
      </div>
      
    
    </div>
  )
}

export default Hero
