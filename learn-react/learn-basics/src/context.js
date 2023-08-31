import React from "react";

//create a context
const GlobalContext = React.createContext();

//provider
const Provider = GlobalContext.Provider;

//consumer
const Consumer = GlobalContext.Consumer;

export { GlobalContext, Provider, Consumer };
