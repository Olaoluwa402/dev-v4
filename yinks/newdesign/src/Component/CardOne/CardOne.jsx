import React, {useCallback,useEffect,useState}from 'react'
import axios from "axios"

const GlobalContext = React.createContext()

const Provider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const [user, setUser] = useState(null);


  const getProducts = useCallback(async () => {
    const url =  `http://localhost:3004/products`;
    const config = {
      headers: {
        "Context-Type": "Application/json",
      },
    };
 
    const { data } = await axios.get(url, config);

    setProducts(data);
  }, []);

  useEffect(() => {
 
    getProducts();
  }, [getProducts]);

  const sum = (arr) => {
    return arr.reduce((acc, cur) => acc + cur, 0);
  };

  const store = {

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

