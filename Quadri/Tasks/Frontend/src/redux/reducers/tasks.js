import {
  CREATE_TASKS_ERROR,
  CREATE_TASKS_REQUEST,
  CREATE_TASKS_SUCCESS,
} from "../constants/tasksConstant";

export const createTasksReducer = (
  state = { user: null, loading: false, success: false, error: null },
  action
) => {
  switch (action.type) {
    case CREATE_TASKS_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case CREATE_TASKS_SUCCESS:
      return {
        ...state,
        loading: false,
        success: true,
        user: action.payload,
      };

    case CREATE_TASKS_ERROR:
      return {
        loading: false,
        success: false,
        error: action.payload,
      };

    default:
      return state;
  }
};
