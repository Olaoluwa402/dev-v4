import {BUY_CAKE} from "../constants";


const initialState = {
    noOfCakes : 65,
    sold : 0,
    itemsRemaining : 65,
    price : 500,
};

export const buyCake = (state = initialState, action) => {
    switch (action.type) {
        case BUY_CAKE:
          return {
            ...state,
            sold: state.sold + action.payload,
            itemsRemaining: state.noOfCakes - (state.sold + action.payload),
          };
        default:
          return state;
      }
};