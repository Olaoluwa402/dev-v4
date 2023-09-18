import React, { useEffect, useState } from "react";
const GlobalContext = React.createContext();

const Provider = ({ children }) => {
  const [products, setProducts] = useState();

  useEffect(() => {
    const productApi = () => {
      fetch("https://fakestoreapi.com/products")
        .then((res) => res.json())
        .then((data) => setProducts(data));
    };
    productApi();
  }, []);

  console.log(products);

  // object to store and release all values in context.js
  return (
    // provider component to release all values in context.js
    <GlobalContext.Provider value={products}>{children}</GlobalContext.Provider>
  );
};

export { GlobalContext, Provider };
