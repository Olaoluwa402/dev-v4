import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";
const GlobalContext = React.createContext();

const Provider = ({ children }) => {
  const [products, setProducts] = useState([]);

  //get product using useCallback hook for caching mechanism
  const getProducts = useCallback(async () => {
    const url = `http://localhost:4000/products`;

    try {
      const { data } = await axios.get(url);

      setProducts(data);
    } catch (err) {
      console.log(err, "err");
    }
  }, []);

  useEffect(() => {
    //make api call to get all products
    getProducts();
  }, [getProducts]);

  console.log(products);

  const store = {
    products,
  };
  return (
    <GlobalContext.Provider value={store}>{children}</GlobalContext.Provider>
  );
};

export { Provider, GlobalContext };
