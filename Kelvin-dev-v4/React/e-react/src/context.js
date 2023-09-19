import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";
import { getCart, addToCartHandler } from "./api";
const GlobalContext = React.createContext();

const Provider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [cartData, setCartData] = useState([]);
  const [cartLength, setCartLength] = useState(0);

  //get product using useCallback hook for caching mechanism
  const getProducts = useCallback(async () => {
    const url = `http://localhost:3004/products`;

    try {
      const { data } = await axios.get(url);

      setProducts(data);
    } catch (err) {
      console.log(err, "err");
    }
  }, []);

  async function getCartData() {
    const cart = await getCart();
    setCartData(cart);
    setCartLength(cart.length);
    return cart;
  }

  useEffect(() => {
    //make api call to get all products
    getProducts();
    getCart();
    getCartData();
  }, [getProducts]);

  console.log(cartLength, "dod");
  console.log(cartData, "op");

  console.log(products);

  const store = {
    products,
    addToCartHandler,
    cartLength,
    cartData,
    getCartData,
    getCart,
  };
  return (
    <GlobalContext.Provider value={store}>{children}</GlobalContext.Provider>
  );
};

export { Provider, GlobalContext };
