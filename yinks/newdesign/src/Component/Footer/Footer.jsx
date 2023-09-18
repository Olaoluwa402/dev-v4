import React from 'react'
import Styles from "../Footer/Footer.module.css"

const Footer = () => {
  return (
    <div className={Styles.footer}>
    <div>
    <h3>Exclusive</h3>
   <ul>
  <li>Subscribe</li>
  <li>Get 10% off your first order</li>
  <li>
    <input type="text" placeholder='enter your email' />
  </li>
   </ul>
  
    </div>
    <div>
    <h3>Support</h3>
   <ul>
  <li>111 Bijoy sarani, Dhaka,
  </li>
  <li>  DH 1515, Bangladesh.</li>
  <li>
  exclusive@gmail.com
  </li>
  <li>+88015-88888-9999</li>
   </ul>
    </div>

    <div>
    <h3>account</h3>
   <ul>
  <li>my account</li>
  <li>signup/login</li>
  <li>
wishlist
  </li>
  <li>cart</li>
  <li>shop</li>
   </ul>
    </div>

    <div>
    <h3>Exclusive</h3>
   <ul>
  <li>Subscribe</li>
  <li>Get 10% off your first order</li>
  <li>
    <input type="text" placeholder='enter your email' />
  </li>
   </ul>
    </div>
    </div>
  )
}

export default Footer