import React from 'react'
import styles from "./Header.module.css"
const Header = () => {
  return (
    <div>
        <div className={styles.header_sec1}>
        <p>
          Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
        </p>
        <p><a href="#">ShopNow</a></p>
        <select className={styles.select}>
            <option>English</option>
            <option>Hausa</option>
            <option>Yoruba</option>
            
            </select>
            {/* <!-- <i class="fa-solid fa-angle-down"></i> --> */}
            
      </div>
    </div>
  )
}

export default Header