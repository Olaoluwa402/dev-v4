import React from "react";
const GlobalContext = React.createContext();

 const provider =  GlobalContext.provider;
 const consumer = GlobalContext.consumer;

 export  {GlobalContext, provider,consumer}