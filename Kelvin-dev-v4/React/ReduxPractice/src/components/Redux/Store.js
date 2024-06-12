import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "@redux-devtools/extension";
import thunk from "redux-thunk";
import { reducers } from "./CombinedReducer";

const middlewares = [thunk];

const setMiddleware =
  process.env.NODE_ENV === "development"
    ? composeWithDevTools(applyMiddleware(...middlewares))
    : applyMiddleware(...middlewares);

export const store = createStore(reducers, setMiddleware);
