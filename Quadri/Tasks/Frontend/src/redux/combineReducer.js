import { combineReducers } from "redux";
import { buyCake } from "./reducers/buyCake";
import {
  createUserReducer,
  deleteUserReducer,
  getAllUserReducer,
  getUserReducer,
  updateUserReducer,
} from "./reducers/users";
import { createTasksReducer } from "./reducers/tasks";

export const reducers = combineReducers({
  cake: buyCake,
  createUser: createUserReducer,
  getAllUser: getAllUserReducer,
  getUser: getUserReducer,
  deleteUser: deleteUserReducer,
  updateUser: updateUserReducer,
  createTask: createTasksReducer,
});
