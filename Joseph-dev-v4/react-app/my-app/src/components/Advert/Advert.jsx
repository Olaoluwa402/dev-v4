import React from 'react'
import styles from './Advert.module.css'

const Advert = () => {
  return (
    <div className=  {styles.topadd}>
        <div className={styles.topaddtxt}>  
            <h5>
                Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
            </h5>
            <div>
                <p>ShopNow</p>
            </div>
        </div>

        <div id={styles.english}>
            <h5>English</h5>
        <img src="https://res.cloudinary.com/dfeyofjln/image/upload/v1692171622/DropDown_lab7lt.png"/>
        </div>
    </div>
  )
}

export default Advert
