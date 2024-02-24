import React, { createContext, useReducer } from 'react'

// using reacts useContext hook we can pass value to every component without using prop drilling
// creating a context hook 1st step
const ThisContext = createContext()

// reducer function which is passed in useReducer
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
const manageState = useReducer(reducer, {basket:[], TotalPrice:0, user:"SignIn"})//reducer is a function and 2nd parameter is intitial state.
return(

// passing value using context hook 2nd step
<ThisContext.Provider value={manageState}>
{children}
</ThisContext.Provider>
)
}

export default StateManger
export{ThisContext}