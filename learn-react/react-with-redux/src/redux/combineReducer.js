import { combineReducers } from "redux";
import { buyCake, CreateUserReducer } from "./reducers";

export const reducers = combineReducers({
  cakes: buyCake,
  createUser: CreateUserReducer,
});
