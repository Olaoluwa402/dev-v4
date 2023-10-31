import {
  CREATE_USER_ERROR,
  CREATE_USER_SUCCESS,
  CREATE_USER_REQUEST,
  GET_USER_REQUEST,
  GET_USER_SUCCESS,
  DELETE_USER_REQUEST,
  DELETE_USER_SUCCESS,
  DELETE_USER_ERROR,
  UPDATE_USER_REQUEST,
  UPDATE_USER_SUCCESS,
  UPDATE_USER_ERROR,
  GET_USER_ERROR,
} from "../constants/userConstant";
import axios from "axios";

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
      type: CREATE_USER_REQUEST,
    });

    const { data } = await axios.post(`${url}/users`, { users }, config);

    console.log(data);

    dispatch({
      type: CREATE_USER_SUCCESS,
      payload: data.payload,
    });
  } catch (error) {
    dispatch({
      type: CREATE_USER_ERROR,
      payload: error.message,
    });
  }
};

export const getUSerAction = (id) => async (dispatch, state) => {
  const user = {};
  const config = {
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${user.token}`,
    },
  };

  try {
    dispatch({
      type: GET_USER_REQUEST,
    });
    const { data } = await axios.get(`${url}/users/${id}`, config);
    dispatch({
      type: GET_USER_SUCCESS,
      payload: data.payload,
    });
  } catch (error) {
    dispatch({
      type: GET_USER_ERROR,
      payload: error.message,
    });
  }
};

export const deleteUserAction = (id) => async (dispatch, state) => {
  const user = {};
  const config = {
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${user.token}`,
    },
  };
  try {
    dispatch({
      type: DELETE_USER_REQUEST,
    });

    const { data } = await axios.delete(`${url}/users/${id}`, config);
    dispatch({
      type: DELETE_USER_SUCCESS,
      payload: data.payload,
    });
  } catch (error) {
    dispatch({
      type: DELETE_USER_ERROR,
      payload: error.message,
    });
  }
};

export const updateUserAction =(id,data)=>async(dispatch, state)=>{

    const user={}
    const config={
        headers:{
            "Content-Type":"application/json",
            authorization:`Bearer ${user.token}`
        }
    }

    try {
        dispatch({
            type:UPDATE_USER_REQUEST
        });
        
        const {data} = axios.patch(`${url}/users/${id}`,data,config)
        console.log(data)
        dispatch({
            type:UPDATE_USER_SUCCESS,
            payload: data.payload
        })
    } catch (error) {
        dispatch({
            type:UPDATE_USER_ERROR,
            payload:error.message
        })
    }
}
