import React, { useState } from "react";
import { blogData } from "./components/data";
const GlobalContext = React.createContext();

const Provider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [user, setUser] = useState(null);
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
  };
  return (
    <GlobalContext.Provider value={store}>{children}</GlobalContext.Provider>
  );
};

export { Provider, GlobalContext };
