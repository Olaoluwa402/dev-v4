import React, { useState, useEffect, useCallback } from "react";
// import axios from "axios";
import {
  getCart,
  addToCartHandler,
  getProductsReq,
  addToWishlistHandler,
  getWishlist,
} from "./api";
const GlobalContext = React.createContext();

const Provider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [cartData, setCartData] = useState([]);
  const [wishlistData, setWishlistData] = useState([]);
  const [wishlistLength, setWishlistLength] = useState([]);
  const [cartLength, setCartLength] = useState(0);

  //get product using useCallback hook for caching mechanism
  const getProducts = useCallback(async () => {
    const data = await getProductsReq();
    setProducts(data);
  }, []);

  async function getCartData() {
    const cart = await getCart();
    setCartData(cart);
    setCartLength(cart.length);
    return cart;
  }
  async function getWishlistData() {
    const wishlist = await getWishlist();
    setWishlistData(wishlist);
    setWishlistLength(wishlist.length);
    return wishlist;
  }

  useEffect(() => {
    //make api call to get all products
    getProducts();
    getCart();
    getCartData();
    getWishlistData();
  }, []);

  console.log(cartLength, "dod");
  console.log(cartData, "op");
  console.log(cartData, "op");

  console.log(products);

  const store = {
    products,
    addToCartHandler,
    addToWishlistHandler,
    cartLength,
    cartData,
    wishlistLength,
    wishlistData,
    getCartData,
    getWishlistData,
    getCart,
    setProducts,
    getProducts,
    getProductsReq,
  };
  return (
    <GlobalContext.Provider value={store}>{children}</GlobalContext.Provider>
  );
};

export { Provider, GlobalContext };
