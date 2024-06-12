import {
  CREATE_USER_ERROR,
  CREATE_USER_REQUEST,
  CREATE_USER_SUCCESS,
  CREATE_USER_RESET,
  GET_All_USER_REQUEST,
  GET_ALL_USER_SUCCESS,
  GET_ALL_USER_ERROR,
  GET_USER_REQUEST,
  GET_USER_SUCCESS,
  GET_USER_ERROR,
  DELETE_USER_REQUEST,
  DELETE_USER_SUCCESS,
  DELETE_USER_ERROR,
  UPDATE_USER_REQUEST,
  UPDATE_USER_SUCCESS,
  UPDATE_USER_ERROR,
} from "../constants/userConstant";
export const createUserReducer = (
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
        ...state,
        loading: false,
        success: false,
        user: null,
        error: null,
      };

    case CREATE_USER_ERROR:
      return {
        loading: false,
        success: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

export const getAllUserReducer = (
  state = { allUsers: [], loading: false, success: false, error: null },
  action
) => {
  switch (action.type) {
    case GET_All_USER_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case GET_ALL_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        success: true,
        allUsers: action.payload,
      };

    case GET_ALL_USER_ERROR:
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

export const getUserReducer = (
  state = { user: null, loading: false, success: false, error: null },
  action
) => {
  switch (action.type) {
    case GET_USER_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case GET_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        success: true,
        user: action.payload,
      };

    case GET_USER_ERROR:
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

export const deleteUserReducer = (
    state = { user: null, loading: false, success: false, error: null },
    action
  ) => {
    switch (action.type) {
      case DELETE_USER_REQUEST:
        return {
          ...state,
          loading: true,
        };
      case DELETE_USER_SUCCESS:
        return {
          ...state,
          loading: false,
          success: true,
          user: action.payload,
        };
  
      case DELETE_USER_ERROR:
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




export const updateUserReducer = (
    state = { user: null, loading: false, success: false, error: null },
    action
  ) => {
    switch (action.type) {
      case UPDATE_USER_REQUEST:
        return {
          ...state,
          loading: true,
        };
      case UPDATE_USER_SUCCESS:
        return {
          ...state,
          loading: false,
          success: true,
          user: action.payload,
        };
  
      case UPDATE_USER_ERROR:
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
