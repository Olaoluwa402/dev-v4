import React from 'react'
import styles from "./box1.module.css" 
import{FaStar} from 'react-icons/fa'

const Box1 = ({Items}) => {
  const {img, title, price,} = Items
    const stars = {
        color: '#ffad33'
    }
  return (
    <div className={styles.just_for_you}>

         <div className={styles.product}>
          <div className={styles.product_box}>
            <img src={img} alt="" />
            <div className={styles.cart}>
              <img src="./e-images/white-cart.svg" alt="" />
              <span>Add To Cart</span>
            </div>
            <div className={styles.position}>
              <img src="./e-images/Ellipse 13.png" alt="" className={styles.elipse} />
              <img src="./e-images/eye.svg" alt="" className={styles.eye} />
            </div>
          </div>
          <div className={styles.price}>
            <p class="title">{title}</p>
            <div className={styles.dollar}>
              <span>{price}</span>
            </div>
          </div>
          <div class="stars">

          <FaStar style={stars}/>
          <FaStar style={stars}/>
          <FaStar style={stars}/>
          <FaStar style={stars}/>
          <FaStar style={stars}/>

            <span>(65)</span>
          </div>
        </div>

       
        {/* <div className={styles.product}>
          <div className={styles.product_box}>
            <img src="./e-images/tv.png" alt="" />
            <div className={styles.cart}>
              <img src="./e-images/white-cart.svg" alt="" />
              <span>Add To Cart</span>
            </div>
            <div className={styles.position}>
              <img src="./e-images/Ellipse 13.png" alt="" className={styles.elipse} />
              <img src="./e-images/eye.svg" alt="" className={styles.eye}/>
            </div>
          </div>
          <div className={styles.price}>
            <p>IPS LCD Gaming Monitor</p>
            <div className={styles.dollar}>
              <span>$960</span>
            </div>
          </div>
          <div class="stars">
          <FaStar style={stars}/>
          <FaStar style={stars}/>
          <FaStar style={stars}/>
          <FaStar style={stars}/>
          <FaStar style={stars}/>

            <span>(65)</span>
          </div>
        </div>

           
        <div className={styles.product}>
          <div className={styles.product_box}>
            <img src="./e-images/game-pad.png" alt="" />
            <div className={styles.cart}>
              <img src="./e-images/white-cart.svg" alt="" />
              <span>Add To Cart</span>
            </div>
            <div className={styles.position}>
              <button style = {newBtn}>New</button>
              <img src="./e-images/Ellipse 13.png" alt="" className={styles.elipse}/>
              <img src="./e-images/eye.svg" alt="" className={styles.eye} />
            </div>
          </div>
          <div className={styles.price}>
            <p>HAVIT HV-G92 Gamepad</p>
            <div className={styles.dollar}>
              <span>$960</span>
            </div>
          </div>
          <div class="stars">

          <FaStar style={stars}/>
          <FaStar style={stars}/>
          <FaStar style={stars}/>
          <FaStar style={stars}/>
          <FaStar style={stars}/>

            <span>(65)</span>
          </div>
        </div>

        
        <div className={styles.product}>
          <div className={styles.product_box}>
            <img src="./e-images/keyboard.png" alt="" />
            <div className={styles.cart}>
              <img src="./e-images/white-cart.svg" alt="" />
              <span>Add To Cart</span>
            </div>
            <div className={styles.position}>
              <img src="./e-images/Ellipse 13.png" alt="" className={styles.elipse} />
              <img src="./e-images/eye.svg" alt="" className={styles.eye} />
            </div>
          </div>
          <div className={styles.price}>
            <p>AK-900 Wired Keyboard</p>
            <div className={styles.dollar}>
              <span>$960</span>
            </div>
          </div>
          <div class="stars">

          <FaStar style={stars}/>
          <FaStar style={stars}/>
          <FaStar style={stars}/>
          <FaStar style={stars}/>
          <FaStar style={stars}/>
          
            <span>(65)</span>
          </div>
        </div> */}


    </div>
  )
}

export default Box1