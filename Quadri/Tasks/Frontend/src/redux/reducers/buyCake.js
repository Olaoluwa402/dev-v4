const initialState={
    noOfCakes:100,
    sold:0,
    remainingItems:100,
    price:1000,
}

 export const buyCake=(state= initialState,action)=>{
    switch(action.type){
        case"BUY_CAKE":
        return{...state, noOfCakes:state.noOfCakes - action.payload,
            sold: state.sold + action.payload,
            remainingItems: state.noOfCakes - (state.sold + action.payload)

        
        
        }
        default:
            return state
    }

}