import React, { useState, useEffect, useCallback } from "react";
import {
  getProductsReq,
  addToCartReq,
  allCartItemsReq,
  addToFavoriteReq,
  allFavoriteItemsReq,
  manageCartQtyReq,
} from "./apiRequets";

import { blogData } from "./components/data";

const GlobalContext = React.createContext();

const Provider = ({ children }) => {
  const [isLoading, setIsLoading] = useState({
    login: false,
    register: false,
  });
  const [cartTotal, setCartTotal] = useState(0);
  const [favoritesTotal, setFavoritesTotal] = useState(0);
  const [products, setProducts] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [carts, setCarts] = useState([]);

  //get user info from stroge if it exist
  const initialUser = localStorage.getItem("userInfo")
    ? JSON.parse(localStorage.getItem("userInfo"))
    : null;
  const [user, setUser] = useState(initialUser);

  console.log(user, "userfromcontext");

  //get product using useCallback hook for caching mechanism
  const getProducts = useCallback(async () => {
    const data = await getProductsReq();
    setProducts(data);
  }, []);

  const getCarts = useCallback(async () => {
    const data = await allCartItemsReq();
    setCarts(data);
  }, []);

  const getFavorites = useCallback(async () => {
    const data = await allFavoriteItemsReq();
    setFavorites(data);
  }, []);

  const getCartTotal = async () => {
    const carts = await allCartItemsReq();
    setCartTotal(carts.length);
  };

  const getFavoritesTotal = async () => {
    const favorites = await allFavoriteItemsReq();
    setFavoritesTotal(favorites.length);
  };

  useEffect(() => {
    //make api call to get all products
    getProducts();
    //make api call to get all favorites
    getFavorites();
    //get cart total
    getCartTotal();

    //carts
    getCarts();

    //get favorites total
    getFavoritesTotal();
  }, []);

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
    allCartItems: allCartItemsReq,
    cartTotal: cartTotal,
    favoritesTotal: favoritesTotal,
    addToFavorite: addToFavoriteReq,
    allFavorite: allFavoriteItemsReq,
     favorites,
    carts,
    manageCartQtyReq,
    getCarts,
    getCartTotal: getCartTotal,
  };
  return (
    <GlobalContext.Provider value={store}>{children}</GlobalContext.Provider>
  );
};

export { Provider, GlobalContext };
