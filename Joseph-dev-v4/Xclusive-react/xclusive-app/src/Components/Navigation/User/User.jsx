
import React, {useState} from 'react' 
import styles from './User.module.css'

const User = () => {
  const [first, setFirst] = useState(false)

  return (
    <div>
    <div className={styles.user} onClick={() => setFirst(!first)}>
          <img src="https://res.cloudinary.com/dfeyofjln/image/upload/v1692657093/user_1_bbyxm7.png" alt="User" />
    </div>
{first && (
      <ul>
        <li><img src='https://res.cloudinary.com/dfeyofjln/image/upload/v1692657093/user_1_bbyxm7.png'/>
          <a href='/'>Manage My Account</a>
        </li>
        <li><img src='https://res.cloudinary.com/dfeyofjln/image/upload/v1692656663/Group_3_clwx0u.png'/>
          <a href='/'>My Order</a>
        </li>
        <li><img src='https://res.cloudinary.com/dfeyofjln/image/upload/v1692656664/icon-cancel_cpfrxh.png'/>
          <a href='/'>My Cancellations</a>
        </li>
        <li><img src='https://res.cloudinary.com/dfeyofjln/image/upload/v1692656663/Icon-Reviews_vv7uit.png'/>
          <a href='/'>My Reviews</a>
        </li>
        <li><img src='https://res.cloudinary.com/dfeyofjln/image/upload/v1692656663/Icon-logout_kcs081.png'/>
          <a href='/'>Logout</a>
        </li>
      </ul>
      )}
    </div>
  )
}

export default User
