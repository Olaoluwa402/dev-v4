import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";
import {
  getCart,
  addToCartHandler,
  getProductsReq,
  addToWishlistHandler,
  getWishlist,
  removeWishlist,
  getProductDataById,
} from "./api";
const GlobalContext = React.createContext();

const Provider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [cartData, setCartData] = useState([]);
  const [wishlistData, setWishlistData] = useState([]);
  const [wishlistLength, setWishlistLength] = useState([]);
  const [cartLength, setCartLength] = useState(0);
  const [product, setProduct] = useState(null);

  //get product using useCallback hook for caching mechanism
  const getProducts = useCallback(async () => {
    const data = await getProductsReq();
    setProducts(data);
  }, []);

  // Function to handle gathering of cart data

  async function getCartData() {
    const cart = await getCart();
    setCartData(cart);
    setCartLength(cart.length);
    return cart;
  }

  // Function to handle gathering of wishlist data
  async function getWishlistData() {
    const wishlist = await getWishlist();
    setWishlistData(wishlist);
    setWishlistLength(wishlist.length);
    return wishlist;
  }

  //
  async function getSingleProduct(id) {
    const product = await getProductDataById(id);
    setProduct(product);
  }

  useEffect(() => {
    //make api call to get all products
    getProducts();
    getCart();
    getWishlist();
    getCartData();
    getWishlistData();
  }, []);

  console.log(cartLength, "dod");
  console.log(cartData, "op");
  console.log(cartData, "op");

  console.log(products);

  const store = {
    products,
    product,
    getSingleProduct,
    addToCartHandler,
    addToWishlistHandler,
    cartLength,
    cartData,
    wishlistLength,
    wishlistData,
    getCartData,
    getWishlistData,
    getCart,
    getWishlist,
    setProducts,
    setWishlistData,
    getProducts,
    getProductsReq,
    deleteWishItem: removeWishlist,
    removeWishlist,
    getProductById: getSingleProduct,
  };
  return (
    <GlobalContext.Provider value={store}>{children}</GlobalContext.Provider>
  );
};

export { Provider, GlobalContext };
