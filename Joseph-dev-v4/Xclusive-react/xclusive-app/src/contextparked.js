import React from 'react';

const GlobalContext = React.createContext();

const Provider = GlobalContext.Provider;

const Consumer = GlobalContext.Consumer;


export { GlobalContext, Provider, Consumer };