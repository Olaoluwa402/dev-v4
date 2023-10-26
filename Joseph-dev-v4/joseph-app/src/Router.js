import React from 'react'
import {Routes, Route, Navigate} from "react-router-dom"
import Home from './Pages/Home'
import Contact from './Pages/Contact'
import About from './Pages/About'
import Services from './Pages/Services'
import Apps from './Pages/Apps'
import Layout from './Components/Layout/Layout'

const Router = () => {
  return (
    <div>
        <Routes>
            <Route
                path = "/"
                element={
                    <Layout>
                        <Home />
                    </Layout>
                }
            />
            <Route
                path="/about"
                element={
                    <Layout>
                        <About />
                    </Layout>
                }
            />
            <Route
               path='/services'
               element={
                <Layout>
                    <Services />
                </Layout>
                }
            />
            <Route
               path='/apps'
               element={
                <Layout>
                   <Apps />
                </Layout>
                }
            />
            <Route
               path='/contact'
               element={
                <Layout>
                   <Contact />
                </Layout>
              }
            />
          

<Route path="*" element={<Navigate to="/not-found" />} />

</Routes>
    
        


    </div>
  )
}

export default Router
