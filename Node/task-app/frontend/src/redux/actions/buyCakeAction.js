import { BUY_CAKE } from "../constants";

export const buyCakeAction = (data) => {
  return {
    type: BUY_CAKE,
    payload: data,
  };
};
