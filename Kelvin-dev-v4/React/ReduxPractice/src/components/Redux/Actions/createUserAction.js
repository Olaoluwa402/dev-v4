import {
  CREATE_USER_REQUEST,
  CREATE_USER_SUCCESS,
  // CREATE_USER_RESET,
  CREATE_USER_ERROR,
} from "../Constants";
import axios from "axios";

const backend_base_url = "http://localhost:4000";
// console.log(config.backend_base_url, "config.backend_base_url");
// asynchronous process
export const createUserAction = (BodyData) => async (dispatch, state) => {
  try {
    console.log(dispatch, "dispatch");
    dispatch({
      type: CREATE_USER_REQUEST,
    });

    // make the call
    const { data } = await axios.post(`${backend_base_url}/users`, {
      BodyData,
    });
    console.log(data, "data");
    //if we get here, then request is a success case
    dispatch({
      type: CREATE_USER_SUCCESS,
      payload: data.BodyData,
    });
  } catch (error) {
    console.log(error.message, "error");
    dispatch({
      type: CREATE_USER_ERROR,
      payload: error.message,
    });
  }
};
