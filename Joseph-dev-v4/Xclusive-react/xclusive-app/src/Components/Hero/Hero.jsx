import React from 'react'
import BoxTop from '../BoxTop/BoxTop'
import Box from '../Box/Box'
import BoxTop2 from '../BoxTop2/BoxTop2'
import Box2 from '../Box2/Box2'


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
    <div>
      <BoxTop/>
      <Box />
      <BoxTop2/>
      <Box2 boxData={boxData}/>
    
    </div>
  )
}

export default Hero
