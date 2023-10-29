import {
  CREATE_TASK_ERROR,
  CREATE_TASK_REQUEST,
  CREATE_TASK_RESET,
  CREATE_TASK_SUCCESS,
  GET_TASKS_REQUEST,
  GET_TASKS_SUCCESS,
  //   GET_TASKS_RESET,
  GET_TASKS_ERROR,
} from "../constants/tasksConstant";

export const CreateTaskReducer = (
  state = { task: null, loading: false, success: false, error: null },
  action
) => {
  switch (action.type) {
    case CREATE_TASK_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case CREATE_TASK_SUCCESS:
      return {
        ...state,
        loading: false,
        success: true,
        user: action.payload,
      };
    case CREATE_TASK_RESET:
      return {
        loading: false,
        success: false,
        user: null,
        error: null,
      };
    case CREATE_TASK_ERROR:
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

export const GetAllTasksReducer = (
  state = { tasks: [], loading: false, success: false, error: null },
  action
) => {
  switch (action.type) {
    case GET_TASKS_REQUEST:
      return { ...state, loading: true };
    case GET_TASKS_SUCCESS:
      return { ...state, tasks: action.payload, success: true, loading: false };
    case GET_TASKS_ERROR:
      return { ...state, error: action.payload, loading: false };
    default:
      return state;
  }
};
