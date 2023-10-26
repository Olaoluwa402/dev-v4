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
} from "../constants";
import axios from "axios";

const backend_base_url = "http://localhost:9000";
// console.log(config.backend_base_url, "config.backend_base_url");
// asynchronous process
export const createUserAction = (BodyData) => async (dispatch, state) => {
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
    console.log(error.message, "error");
    dispatch({
      type: CREATE_USER_ERROR,
      payload: error.message,
    });
  }
};

export const getUsersAction = () => async (dispatch, state) => {
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
      type: GET_USERS_REQUEST,
    });
    // make the call
    const { data } = await axios.get(`${backend_base_url}/users`, config);
    console.log(data, "data");
    //if we get here, then request is a success case
    dispatch({
      type: GET_USERS_SUCCESS,
      payload: data.payload,
    });
  } catch (error) {
    console.log(error.message, "error");
    dispatch({
      type: GET_USERS_ERROR,
      payload: error.message,
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
    console.log(error.message, "error");
    dispatch({
      type: GET_USER_ERROR,
      payload: error.message,
    });
  }
};
