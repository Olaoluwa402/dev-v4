import { toast } from "react-toastify";
import {
  CREATE_USER_REQUEST,
  CREATE_USER_SUCCESS,
  CREATE_USER_RESET,
  CREATE_USER_ERROR,
  GET_USERS_REQUEST,
  GET_USERS_SUCCESS,
  GET_USERS_ERROR,
  GET_USER_REQUEST,
  GET_USER_SUCCESS,
  GET_USER_ERROR,
  DELETE_USER_REQUEST,
  DELETE_USER_SUCCESS,
  DELETE_USER_ERROR,
  UPDATE_USER_REQUEST,
  UPDATE_USER_SUCCESS,
  UPDATE_USER_ERROR,
  LOGIN_USER_REQUEST,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_ERROR,
  LOGIN_USER_RESET,
} from "../constants";
import axios from "axios";

const backend_base_url = "http://localhost:9000";
// console.log(config.backend_base_url, "config.backend_base_url");
// asynchronous process

export const loginUserAction = (BodyData) => async (dispatch, state) => {
  const user = {};
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  try {
    dispatch({
      type: LOGIN_USER_REQUEST,
    });
    // make the call

    const { data } = await axios.post(
      `${backend_base_url}/users/login`,
      {
        email: BodyData.email,
        password: BodyData.password,
      },
      config
    );

    //if we get here, then request is a success case
    const userInfo = { ...data.payload, token: data.token };
    dispatch({
      type: LOGIN_USER_SUCCESS,
      payload: userInfo,
    });

    //persist user login detail in local storage
    localStorage.setItem("userInfo", JSON.stringify(userInfo));
  } catch (error) {
    let message =
      error.response && error.response.data.errors
        ? error.response.data.errors.join(",")
        : error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    console.log(message, "error");
    dispatch({
      type: LOGIN_USER_ERROR,
      payload: message,
    });
  }
};

export const logout = () => async (dispatch, state) => {
  console.log("loogged out");
  dispatch({ type: LOGIN_USER_RESET });
  localStorage.setItem("userInfo", null);
  toast.success("logged out");
};

export const createUserAction = (BodyData) => async (dispatch, state) => {
  const user = {};
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  try {
    console.log(dispatch, "dispatch");
    dispatch({
      type: CREATE_USER_REQUEST,
    });
    // make the call
    const { data } = await axios.post(
      `${backend_base_url}/users`,
      {
        BodyData,
      },
      config
    );
    console.log(data, "data");
    //if we get here, then request is a success case
    dispatch({
      type: CREATE_USER_SUCCESS,
      payload: data.payload,
    });
  } catch (error) {
    let message =
      error.response && error.response.data.errors
        ? error.response.data.errors.join(",")
        : error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    console.log(message, "error");
    dispatch({
      type: LOGIN_USER_ERROR,
      payload: message,
    });
  }
};

export const getUsersAction = () => async (dispatch, state) => {
  const {
    loginUser: { user },
  } = state();

  const config = {
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${user.token}`,
    },
  };
  try {
    console.log(dispatch, "dispatch");
    dispatch({
      type: GET_USERS_REQUEST,
    });
    // make the call
    const { data } = await axios.get(`${backend_base_url}/admin`, config);
    console.log(data, "data");
    //if we get here, then request is a success case
    dispatch({
      type: GET_USERS_SUCCESS,
      payload: data.payload,
    });
  } catch (error) {
    let message =
      error.response && error.response.data.errors
        ? error.response.data.errors.join(",")
        : error.response && error.response.data.message
        ? error.response.data.message
        : error.message;

    console.log(error, "error");
    if (message.toLowerCase().includes("jwt")) {
      dispatch(logout());
    }
    dispatch({
      type: LOGIN_USER_ERROR,
      payload: message,
    });
  }
};

export const GetUserAction = (id) => async (dispatch, state) => {
  const user = {};
  const config = {
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${user.token}`,
    },
  };
  try {
    console.log(dispatch, "dispatch");
    dispatch({
      type: GET_USER_REQUEST,
    });
    // make the call
    const { data } = await axios.get(`${backend_base_url}/users/${id}`, config);
    console.log(data, "data");
    //if we get here, then request is a success case
    dispatch({
      type: GET_USER_SUCCESS,
      payload: data.payload,
    });
  } catch (error) {
    let message =
      error.response && error.response.data.errors
        ? error.response.data.errors.join(",")
        : error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    console.log(message, "error");
    dispatch({
      type: LOGIN_USER_ERROR,
      payload: message,
    });
  }
};

export const DeleteUserAction = (id) => async (dispatch, state) => {
  const user = {};
  const config = {
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${user.token}`,
    },
  };
  try {
    console.log(dispatch, "dispatch");
    dispatch({
      type: DELETE_USER_REQUEST,
    });
    // make the call
    const { data } = await axios.delete(
      `${backend_base_url}/users/${id}`,
      config
    );
    console.log(data, "data");
    //if we get here, then request is a success case
    dispatch({
      type: DELETE_USER_SUCCESS,
      payload: data.payload,
    });
  } catch (error) {
    let message =
      error.response && error.response.data.errors
        ? error.response.data.errors.join(",")
        : error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    console.log(message, "error");
    dispatch({
      type: LOGIN_USER_ERROR,
      payload: message,
    });
  }
};

export const updateUserAction = (id, data) => async (dispatch, state) => {
  const user = {};
  const config = {
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${user.token}`,
    },
  };
  try {
    console.log(dispatch, "dispatch");
    dispatch({
      type: UPDATE_USER_REQUEST,
    });
    // make the call
    const { data } = await axios.patch(
      `${backend_base_url}/users/${id}`,
      data,
      config
    );
    console.log(data, "data");
    //if we get here, then request is a success case
    dispatch({
      type: UPDATE_USER_SUCCESS,
      payload: data.payload,
    });
  } catch (error) {
    let message =
      error.response && error.response.data.errors
        ? error.response.data.errors.join(",")
        : error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    console.log(message, "error");
    dispatch({
      type: LOGIN_USER_ERROR,
      payload: message,
    });
  }
};
