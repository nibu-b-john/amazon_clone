import React, { createContext, useReducer } from 'react'
const ThisContext = createContext()



function reducer(state, action) {


switch(action.type){
    case "addToCart":
    return {basket:[...state.basket, action.items], TotalPrice: state.TotalPrice+action.items.price.price, user: state.user}
    case "removeFromCart":
            const index = state.basket.findIndex((basket)=>{
           return basket.id.id === action.itemToBeDeleted.id
            }
            )
            state.basket.splice(index, 1)
           
        return {basket:[...state.basket], TotalPrice: state.TotalPrice-action.subtractThis.price, user: state.user}  
    case "loggedIn":
        return {basket:[...state.basket],TotalPrice: state.TotalPrice , user:action.ifloggedIn}
        case "loggedOut":
        return {basket:[...state.basket],TotalPrice: state.TotalPrice , user:"SignIn"}
        default:
        return state
}
}



function StateManger({children}) {


const manageState = useReducer(reducer, {basket:[], TotalPrice:0, user:"SignIn"})
return(
<ThisContext.Provider value={manageState}>
{children}
</ThisContext.Provider>
)
}

export default StateManger
export{ThisContext}