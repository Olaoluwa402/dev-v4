import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "@redux-devtools/extension";
import thunk from "redux-thunk";

const middleWare = [thunk];

const setMiddleWare = (process.env.NODE_EVV = "development"
  ? composeWithDevTools(applyMiddleware(...middleWare))
  : applyMiddleware(...middleWare));

export const store = createStore(() => {}, setMiddleWare);
