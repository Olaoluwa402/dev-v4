import axios from "axios";
import {
  CREATE_TASKS_ERROR,
  CREATE_TASKS_REQUEST,
  CREATE_TASKS_SUCCESS,
} from "../constants/tasksConstant";
const url = "http://localhost:8000";
export const createUserAction = (users) => async (dispatch, state) => {
  const user = {};
  const config = {
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${user.token}`,
    },
  };

  try {
    dispatch({
      type: CREATE_TASKS_REQUEST,
    });

    const { data } = await axios.post(`${url}/users`, { users }, config);

    console.log(data);

    dispatch({
      type: CREATE_TASKS_SUCCESS,
      payload: data.payload,
    });
  } catch (error) {
    dispatch({
      type: CREATE_TASKS_ERROR,
      payload: error.message,
    });
  }
};
