import { CREATE_USER_REQUEST } from "../constants";
import axios from "axios";
import {
  CREATE_TASK_REQUEST,
  CREATE_TASK_ERROR,
  CREATE_TASK_SUCCESS,
  GET_TASKS_REQUEST,
  GET_TASKS_SUCCESS,
  GET_TASKS_ERROR,
} from "../constants/tasksConstant";

const backend_base_url = "http://localhost:9000";
export const createTaskAction = (BodyData) => async (dispatch, state) => {
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
      type: CREATE_TASK_REQUEST,
    });
    // make the call
    const { data } = await axios.post(
      `${backend_base_url}/tasks`,
      {
        BodyData,
      },
      config
    );
    console.log(data, "data");
    //if we get here, then request is a success case
    dispatch({
      type: CREATE_TASK_SUCCESS,
      payload: data.payload,
    });
  } catch (error) {
    console.log(error.message, "error");
    dispatch({
      type: CREATE_TASK_ERROR,
      payload: error.message,
    });
  }
};

export const getTasksAction = (BodyData) => async (dispatch, state) => {
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
      type: GET_TASKS_REQUEST,
    });
    // make the call
    const { data } = await axios.get(`${backend_base_url}/tasks`, config);
    console.log(data, "data");
    //if we get here, then request is a success case
    dispatch({
      type: GET_TASKS_SUCCESS,
      payload: data.payload,
    });
  } catch (error) {
    console.log(error.message, "error");
    dispatch({
      type: GET_TASKS_ERROR,
      payload: error.message,
    });
  }
};
