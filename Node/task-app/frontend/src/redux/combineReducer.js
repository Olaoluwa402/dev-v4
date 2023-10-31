import { combineReducers } from "redux";
import {
  buyCake,
  CreateUserReducer,
  DeleteUserReducer,
  GetAllUserReducer,
  GetUserReducer,
  updateUserReducer,
  CreateTaskReducer,
  GetAllTasksReducer,
  LoginUserReducer,
} from "./reducers";

export const reducers = combineReducers({
  cakes: buyCake,
  loginUser: LoginUserReducer,
  createUser: CreateUserReducer,
  allUsers: GetAllUserReducer,
  user: GetUserReducer,
  userDeleted: DeleteUserReducer,
  updateUser: updateUserReducer,
  createTask: CreateTaskReducer,
  getAllTasks: GetAllTasksReducer,
});
