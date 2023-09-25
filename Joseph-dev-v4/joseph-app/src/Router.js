import React from 'react'
import {Routes, Route, Navigate} from 'react-router-dom'
import HomePage from './Pages/HomePage'

const Router = () => {
  return (
    <Routes>
      <Route   
      path = "/"
      element = {
        <HomePage />
      }/>
      
      
    </Routes>
  )
}

export default Router
