import React from 'react'
import Navigation from '../Navbar/Navbar'
import Footer from "../Footer/Footer.jsx"

const Layout = ({children}) => {
  return (
    <div>
        <Navigation/>
        <main>{children}</main>
        <Footer/>
    </div>
  )
}

export default Layout