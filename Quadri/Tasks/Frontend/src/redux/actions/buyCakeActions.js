import { BUY_CAKE } from "../constants/buyCakeConstant";

export const buyCake=(data)=>{
    return{
        type:BUY_CAKE,
        payload:data
    }
}