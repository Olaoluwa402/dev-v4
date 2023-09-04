import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";
import { blogData } from "./components/data";
const GlobalContext = React.createContext();

const Provider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const [user, setUser] = useState(null);

  //get product using useCallback hook for caching mechanism
  const getProducts = useCallback(async () => {
    const url = `http://localhost:4000/products`;
    const config = {
      headers: {
        "Context-Type": "Application/json",
      },
    };
    try {
      const { data } = await axios.get(url, config);

      setProducts(data);
    } catch (err) {
      console.log(err, "err");
    }
  }, []);

  useEffect(() => {
    //make api call to get all products
    getProducts();
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
  };
  return (
    <GlobalContext.Provider value={store}>{children}</GlobalContext.Provider>
  );
};

export { Provider, GlobalContext };
