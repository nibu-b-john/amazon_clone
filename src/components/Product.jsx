import React, { useContext } from 'react';
import "../styling/Products.css"

// const ThisContext = createContext() this is pulled from Statemanger to use dispatch
import {ThisContext} from "./StateManger.jsx"


// Got this value from Home.js props
function Product({id, title, price, rating,description, image}) {


// pulling [state, dispatch] = [manageItems[0], manageItems[1]]
const manageItems = useContext(ThisContext)
const [dispatch] = [manageItems[1]];

function addToCart() {

// sending data back StateManager.js
    dispatch({type: "addToCart",
items:{
    key:{id},
    id:{id},
    title:{title},
    description:{description},
    price:{price},
    rating:{rating},
    image:{image}
}
})

}

    return (
        <div className="product">
<div className="product__container">
<div className="productImg">
    <img src={image} alt="products" />
    </div>
        <p className="title">{title}</p>
        <p className="description">{description}</p>
        <span className="stars">
        
        {Array(rating).fill().map((_, index)=>{
           return  <p key={index}>⭐</p> 
        })}


        </span> 

        <p className="price"><sup>$</sup>{price}</p>

        <button type="button" className="btn btn-warning" 
        onClick={addToCart}
        >Add To Basket</button>
</div>

        </div>
   
    )
}

export default Product
