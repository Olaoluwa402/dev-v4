// install the foll dependencies - redux,@redux-devtools/extension, redux-thunk, react-redux,
import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "@redux-devtools/extension";
import thunk from "redux-thunk";

const middlewares = [thunk];

// set middleware based on the environment
const setMiddleware =
  process.env.NODE_ENV === "development"
    ? composeWithDevTools(applyMiddleware(...middlewares))
    : applyMiddleware(...middlewares);

//create store
export const store = createStore(() => {}, setMiddleware);
