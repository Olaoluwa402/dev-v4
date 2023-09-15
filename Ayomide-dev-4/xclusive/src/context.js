import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";
import { getProductsReq, addToCartReq, allCartItemsReq } from "./apiRequets";



const GlobalContext = React.createContext();

const Provider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [cartTotal, setCartTotal] = useState(0);

  const getCartTotal = async () => {
    const cartTotal = await allCartItemsReq();
    setCartTotal(cartTotal.length);
  };


//  const getProductsReq = async () => {
//   const url = `http://localhost:3004/products`;
  
//   try {
//     const { data } = await axios.get(url);

//     return data;
//   } catch (err) {
//     console.log(err, "err");
//   }
// }

  //get product using useCallback hook for caching mechanism
  const getProducts = useCallback(async () => {
    const data = await getProductsReq();
    setProducts(data);
  }, []);

  useEffect(() => {
    //make api call to get all products
    getProducts();

    getCartTotal();

  }, [getProducts]);

const store = {
    products,
    addToCart: addToCartReq,
    allCartItems: allCartItemsReq,
    cartTotal: cartTotal,
  };
 
  return (
    <GlobalContext.Provider value={store}>{children}</GlobalContext.Provider>
  );
};

export { Provider, GlobalContext };
