import { combineReducers } from "redux";
import { CreateUserReducer, GetUserReducer } from "./Reducers";

export const reducers = combineReducers({
  createUser: CreateUserReducer,
  getUser: GetUserReducer,
});
