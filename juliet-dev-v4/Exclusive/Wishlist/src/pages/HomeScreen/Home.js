import React from 'react'
import Advert from '../../component/Advertisment/Advert'
import Nav from '../../component/Navigation/Nav'
import HeroPage from '../../component/Hero/Hero'
import Footer from '../../component/Footer/Footer'

const HomePage = () => {
  return (
    <div>
      <Advert />
      <Nav/>
      <HeroPage />
      <Footer />
    </div>
  )
}

export default HomePage