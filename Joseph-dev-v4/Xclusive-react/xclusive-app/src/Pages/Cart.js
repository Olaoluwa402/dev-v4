import React from 'react'
import Advert from '../Components/Advert/Advert'
import CartProduct from '../Components/CartProduct/CartProduct'
import Footer from '../Components/Footer/Footer'
import Navigation2 from '../Components/Navigation/Navigation2/Navigation2'


const Cart = () => {
  return (
    <div>
      <Advert/>
      <Navigation2/>
      <CartProduct/>
      <Footer/>
    </div>
  )
}

export default Cart
