import React, {useState, useEffect, useCallback} from 'react'
import axios from 'axios'
import { 
  getProductsReq, 
  allCartItemsReq,
  addToCartReq, 
  allFavouriteItemsReq, 
  addToFavouritesReq,
  manageCartQtyReq,} from "./apiCalls";

import {blogData} from "./Components/data";



const GlobalContext = React.createContext();

const Provider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [cartTotal, setCartTotal] = useState(0);
  const [favouritesTotal, setFavouritesTotal] = useState(0);
  const [favourites, setFavourites]= useState([]);
  const [products, setProducts] = useState([]);
  const [carts, setCarts] = useState([]);

  const initialUser = localStorage.getItem("userInfo")
    ? JSON.parse(localStorage.getItem("userInfo"))
    : null;
  const [user, setUser] = useState(initialUser);

  console.log(user, "userfromcontext");


  //get product using useCallback hook for caching mechanism
  const getProducts = useCallback(async () => {
    const data  = await getProductsReq();
    setProducts(data);
  }, []);

  const getCarts = useCallback(async () => {
     const data = await allCartItemsReq();
     setCarts(data)

    //  console.log(data, "Datas")

  },[])

  const getCartTotal = async () => {
    const carts = await allCartItemsReq();
    setCartTotal(carts.length);
  };

 const getFavourites = useCallback( async () => {
  const data = await allFavouriteItemsReq();
  setFavourites(data)
 },[])

 const getFavouritesTotal = async () => {
  const favourites = await allFavouriteItemsReq();
   setFavouritesTotal(favourites.length);
 };
  useEffect(() => {
    //make api call to get all products
    getProducts();

    getCartTotal();
    getCarts();
    getFavourites();
    getFavouritesTotal();
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
    allCartItems: allCartItemsReq,
    products,
    addToCart: addToCartReq,
    cartTotal : cartTotal,
    getCartTotal,
    carts,
    addToFavourites: addToFavouritesReq,
    getFavouritesTotal,
    favourites,
    manageCartQtyReq,
    favouritesTotal: favouritesTotal,
    allFavouriteItems : allFavouriteItemsReq
  };
  return (
    <GlobalContext.Provider value={store}>{children}</GlobalContext.Provider>
  );
};

export { Provider, GlobalContext };