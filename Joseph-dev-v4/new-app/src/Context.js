import React,{useState}  from "react";

import { Data } from "./Component/data";

const Globalcontext = React.createContext();

const Provider = ({children}) =>{

const [isLoading, setIsLoading] = useState(false);
const [priceTotal, setPriceTotal] = useState(0);
const Price = () => {
    const getPrice = Data.map(item => item.price);
const sumPrice = getPrice.reduce((acc, cur) => acc + cur,0);

setPriceTotal(sumPrice);
}


    const store = {
     isLoading : isLoading,
     priceTotal: priceTotal,
     Price: Price
    }

   return <Globalcontext.Provider value={store}>
    {children}
   </Globalcontext.Provider>
}



export {Globalcontext, Provider}

