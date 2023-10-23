import React from 'react'


import styles from './Box2.module.css'
import Box from '../Box/Box'



    const Box2= () => {
      const boxData = [
        {
          id : Math.floor(Math.random() * 1000),
          title:"Gucci Duffle Bag",
          image:"https://res.cloudinary.com/dfeyofjln/image/upload/v1692172728/guccibag_jmaqgc.png",
          price:"960",
          discount: "$1100",
          img: "https://res.cloudinary.com/dfeyofjln/image/upload/v1692172729/Quick_View_mw2nbt.png ",
          discpercent: "https://res.cloudinary.com/dfeyofjln/image/upload/v1692172726/Discount_percent_tnik6k.png"
        },
        {
          id : Math.floor(Math.random() * 1000),
          title:"ASUS FHD Gaming Laptop",
          image:"https://res.cloudinary.com/dfeyofjln/image/upload/v1692172729/laptop_jnouoi.png",
          price:"1000",
          discount: "$1160",
          img: "https://res.cloudinary.com/dfeyofjln/image/upload/v1692172729/Quick_View_mw2nbt.png "
      
        },
        {
          id : Math.floor(Math.random() * 1000),
          title:"Quilted Satin Jacket",
          image:"https://res.cloudinary.com/dfeyofjln/image/upload/v1692172728/jacket_gjn5dh.png",
          price:"540",
          img: "https://res.cloudinary.com/dfeyofjln/image/upload/v1692172729/Quick_View_mw2nbt.png "
      
        },
        {
          id : Math.floor(Math.random() * 1000),
          title:"GP11 Shooter USB Gamepad",
          image:"https://res.cloudinary.com/dfeyofjln/image/upload/v1692172726/black-keypad_bj5f8r.png",
          price:"750",
          img: "https://res.cloudinary.com/dfeyofjln/image/upload/v1692172729/Quick_View_mw2nbt.png "
      
        },
        {
          id : Math.floor(Math.random() * 1000),
          title:"HAVIT HV-G92 Gamepad",
          image:"https://res.cloudinary.com/dfeyofjln/image/upload/v1691701800/red-keypad_nnqcv3.png",
          price:"560",
          img: "https://res.cloudinary.com/dfeyofjln/image/upload/v1692172729/Quick_View_mw2nbt.png ",
          discpercent: "https://res.cloudinary.com/dfeyofjln/image/upload/v1692172729/New_Button_ccjduz.png"
      
        },
        {
          id : Math.floor(Math.random() * 1000),
          title:"IPS LCD Gaming Monitor",
          image:"https://res.cloudinary.com/dfeyofjln/image/upload/v1691701799/television_ybro3a.png",
          price:"1160",
          img: "https://res.cloudinary.com/dfeyofjln/image/upload/v1692172729/Quick_View_mw2nbt.png "
      
        },
        {
          id : Math.floor(Math.random() * 1000),
          title:"RGB liquid CPU Coolert",
          image:"https://res.cloudinary.com/dfeyofjln/image/upload/v1691701799/radio_q29sbh.png",
          price:"1960",
          img: "https://res.cloudinary.com/dfeyofjln/image/upload/v1692172729/Quick_View_mw2nbt.png "
      
        },
        {
          id : Math.floor(Math.random() * 1000),
          title:"AK-900 Wired Keyboard",
          image:"https://res.cloudinary.com/dfeyofjln/image/upload/v1691701798/keyboard_htihku.png",
          price:"200",
          img: "https://res.cloudinary.com/dfeyofjln/image/upload/v1692172729/Quick_View_mw2nbt.png "
      
        },
      
       ]
      return (
        <div className={styles.container}>
            <Box  boxData= {boxData}/> 
       
          </div>
    
  );
};

export default Box2