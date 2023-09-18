import React from 'react'
import Button from '../Button/Button'
import Icons from '../Icons/Icons'
import Styles from  "../CardTwo/CardTwo.module.css"

const CardTwo = () => {
  return (
    <div className={Styles.wishlist}>
    <div className={Styles.whishdiv}>
     <h5>See all</h5>

     <Button  color="black" bgColor="white">
   
     </Button>
    </div>
    <div className={Styles.generaldiv}>

     <div>
       <div  className={Styles.cards}>
   
     <div className={Styles.btnicon}>
         <Button 
          color="white"
          bgColor="red"
          text="-30%"
          width="20px"
          >
   </Button>
   <Icons/>
         </div>
         <img src="images/laptop.png" alt="" />
         </div >
         <Button  color="white"
         bgColor="black"
         width="100%"
         text="add to cart">
   
   </Button>
   <p>Gucci duffle bag</p>
   <span>
     e960
   </span>
     </div>
     <div>
       <div  className={Styles.cards}>
     <div className={Styles.btnicon}>
   
   <Icons/>
         </div>
         <img src="images/frame.png" alt="" />
         </div>
         <Button  color="white"
          bgColor="black"
          width="100%"
          text="add to cart">
   
   </Button>
   <p>Gucci duffle bag</p>
   <span>
     e960
   </span>
     </div>


     <div>
       <div className={Styles.cards}>
     <div>
   
   <Icons/>
         </div>
    
      <img src="images/game1.png" alt="" />
      </div>
         <Button
       text="add to cart"
       color="white"
       width="100%"
       bgColor="black"
     />

   <p>Gucci duffle bag</p>
   <span>
     e960
   </span>
     </div>


     <div>
       <div className={Styles.cards}>
     <div>
    
   <Icons/>
         </div>
         <img src="images/keypad.png" alt="" />
     </div>
     <Button
       text="add to cart"
       color="white"
       width="100%"
       bgColor="black"
     />

   <p>Gucci duffle bag</p>
   <span>
     e960
   </span>
     </div>
     
       </div>

   
 </div>
  )
}

export default CardTwo