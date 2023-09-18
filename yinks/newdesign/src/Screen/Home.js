import React from "react";

import Products from "../Component/store/products/Products";

import CardTwo from "../Component/CardTwo/CardTwo"

const Home = () => {
 
  return (
    <div>

      <CardTwo/>
      <Products products={Products}/>
  
    </div>
  )
}

export default Home