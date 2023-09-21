// A reducer is a function that receives inital state and action -type and payload
//and return a new state after modification based the the dispatched action

const initialState = {
  noOfcakes: 50,
  sold: 0,
  remainingItem: 50,
  price: 500,
};
const buyCake = (state = initialState, action) => {
  switch (action.type) {
    case "BUY_CAKE":
      return {
        ...state,
        noOfcakes: state.noOfcakes - action.payload,
        sold: state.sold + action.payload,
      };
    default:
      return state;
  }
};
