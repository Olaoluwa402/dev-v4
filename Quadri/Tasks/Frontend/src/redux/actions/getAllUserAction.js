import { GET_All_USER_REQUEST,GET_ALL_USER_SUCCESS,GET_ALL_USER_ERROR } from "../constants/userConstant";
import axios from "axios"

const url = "http://localhost:8000/users"

export const getAllUserReq =(user)=>async(dispatch,state)=>{
    const user ={}
    const config ={
        headers:{
            "Content-Type":"application/json",
            authorization: `Bearer ${user.token}`
        }
    }

    try {
        dispatch({
            type: GET_All_USER_REQUEST
        });

        const{data} = await axios.get(url,config)
        console.log(data,"allData")
        dispatch({
            type:GET_ALL_USER_SUCCESS,
            payload:data
        })

        
    } catch (error) {
        dispatch({
            type:GET_ALL_USER_ERROR,
            payload:error.message
        })
    }
}