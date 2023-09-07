import {Routes,Route,Navigate} from "react-router-dom"

import React from 'react'
import Home from "./Component/Home"
import { Provider } from "./Context"

const Router = () => {
  return (
    <div> <Provider>
        <Routes>
            <Route path="/" element ={<Home/>}/>
        </Routes>
    </Provider>
        
    </div>
  )
}

export default Router