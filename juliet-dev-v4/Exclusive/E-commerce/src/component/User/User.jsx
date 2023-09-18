import React from 'react'
import { Link } from 'react-router-dom'


function User() {
  return (
    <div>
        <Link to="/Account"><img src="./e-images/user.svg" alt="" /></Link>
    </div>
  )
}

export default User