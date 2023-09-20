import React, {useContext} from 'react'
import { GlobalContext } from '../../../context'

import styles from './Carticon.module.css'
import { Link } from 'react-router-dom'

const Carticon = () => {

  const {cartTotal} = useContext(GlobalContext)
  return (
<div id={styles.buy_cart} className="relative">
    <Link to={"/cartproducts "}>
      <img src="https://res.cloudinary.com/dfeyofjln/image/upload/v1692171622/Cart1_with_buy_uri7s5.png" alt="Cart" />
    </Link>
    <div className="absolute top-5 right-0 w-5 h-5 rounded-full bg-red-600 justify-center items-center flex flex-row text-white text-xs">
      <span className={styles.cart_count}>{cartTotal}</span>
    </div>
</div>
  )
}

export default Carticon