import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";
import {
   addToCartReq,
    allCartItemsReq,
    manageCartQtyReq
   } from "./apiRequets";



const GlobalContext = React.createContext();

const Provider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [cartTotal, setCartTotal] = useState(0);
  const [carts, setCarts] = useState([]);

  const getCartTotal = useCallback(
    async () => {
    const Total = await allCartItemsReq();
    setCartTotal(Total.length);
  }
  )
const [isLoading, setIsLoading] = useState({
    login: false,
    register: false,
    addFavorite: false,
    addToCart: false,
  });
  
  const getCart = useCallback(async () => {
      const cart = await allCartItemsReq();
      setCarts(cart)
  })


 const getProductsReq = async () => {
  const url = `http://localhost:4000/products`;
  
  try {
    const { data } = await axios.get(url);

    return data;
  } catch (err) {
    console.log(err, "err");
  }
}

  // get product using useCallback hook for caching mechanism
  const getProducts = useCallback(async () => {
    const data = await getProductsReq();
    setProducts(data);
  }, []);

   const getCarts = useCallback(async () => {
    const data = await allCartItemsReq();
    setCarts(data);
  },
    []);

  useEffect(() => {
    //make api call to get all products
    getProducts();
      // get cart total
    getCartTotal();
    // get carts
    getCart();
    ////
    getCarts()

  }, [getProducts]);

  // const sum = (arr) => {
  //   return arr.reduce((acc, cur) => acc + cur, 0);
  // };


const store = {
    products,
    carts,
    getCartTotal:getCartTotal,
    addToCart: addToCartReq,
    allCartItems: allCartItemsReq,
    cartTotal: cartTotal,
    manageCartQtyReq
  };
 
  return (
    <GlobalContext.Provider value={store}>{children}</GlobalContext.Provider>
  );
};

export { Provider, GlobalContext };
