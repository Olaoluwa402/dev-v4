import {
  CREATE_USER_REQUEST,
  CREATE_USER_SUCCESS,
  CREATE_USER_RESET,
  CREATE_USER_ERROR,
} from "../constants";

export const CreateUserReducer = (
  state = { user: null, loading: false, success: false, error: null },
  action
) => {
  switch (action.type) {
    case CREATE_USER_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case CREATE_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        success: true,
        user: action.payload,
      };
    case CREATE_USER_RESET:
      return {
        loading: false,
        success: false,
        user: null,
        error: null,
      };
    case CREATE_USER_ERROR:
      return {
        ...state,
        loading: false,
        success: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export const GetUserReducer = (state = {}, action) => {};

export const GetAllUserReducer = (state = {}, action) => {};

export const DeleteUserReducer = (state = {}, action) => {};
