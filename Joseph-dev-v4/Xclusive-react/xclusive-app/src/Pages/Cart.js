import React from 'react'
import Advert from '../Components/Advert/Advert'
import Navigation from '../Components/Navigation/Navigation'
import CartProduct from '../Components/CartProduct/CartProduct'
import Footer from '../Components/Footer/Footer'


const Cart = () => {
  return (
    <div>
      <Advert/>
      <Navigation/>
      <CartProduct/>
      <Footer/>
    </div>
  )
}

export default Cart
