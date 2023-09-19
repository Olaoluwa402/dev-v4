import React, {useState, useEffect, useCallback} from 'react'
import axios from 'axios'
import { getProductsReq} from "./apiCalls/product";
import {allCartItemsReq, addToCartReq} from "./apiCalls/cart";
import {blogData} from "./Components/data";



const GlobalContext = React.createContext();

const Provider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [cartTotal, setCartTotal] = useState(0);
  const [products, setProducts] = useState([]);
  const [user, setUser] = useState(null);

  //get product using useCallback hook for caching mechanism
  const getProducts = useCallback(async () => {
    const data  = await getProductsReq();
    setProducts(data);
  }, []);

  const getCartTotal = async () => {
    const cartTotal = await allCartItemsReq();
    setCartTotal(cartTotal.length);
  };

  useEffect(() => {
    //make api call to get all products
    getProducts();

    getCartTotal()
  }, [getProducts]);

  const sum = (arr) => {
    return arr.reduce((acc, cur) => acc + cur, 0);
  };

  const store = {
    blogData: blogData,
    sum: sum,
    user,
    setUser,
    isLoading,
    setIsLoading,
    products,
    addToCart: addToCartReq,
    cartTotal : cartTotal
  };
  return (
    <GlobalContext.Provider value={store}>{children}</GlobalContext.Provider>
  );
};

export { Provider, GlobalContext };