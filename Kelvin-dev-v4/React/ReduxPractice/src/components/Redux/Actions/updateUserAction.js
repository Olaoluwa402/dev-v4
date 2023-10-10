import {
  GET_USERS_REQUEST,
  GET_USERS_SUCCESS,
  GET_USERS_ERROR,
  // GET_USERS_RESET,
} from "../Constants";
import axios from "axios";

const backend_base_url = "http://localhost:4000";
// console.log(config.backend_base_url, "config.backend_base_url");
// asynchronous process
export const updateUserAction = (BodyData) => async (dispatch, state) => {
  try {
    console.log(dispatch, "dispatch");
    dispatch({
      type: GET_USERS_REQUEST,
    });

    // make the call
    const { data } = await axios.get(`${backend_base_url}/users`);
    console.log(data, "data");
    //if we get here, then request is a success case
    dispatch({
      type: GET_USERS_SUCCESS,
      payload: data.BodyData,
    });
  } catch (error) {
    console.log(error.message, "error");
    dispatch({
      type: GET_USERS_ERROR,
      payload: error.message,
    });
  }
};
