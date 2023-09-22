import { combineReducers } from "redux";
import { buyCake } from "./reducers/buyCake";

export const reducers = combineReducers({
  cakes: buyCake,
});
