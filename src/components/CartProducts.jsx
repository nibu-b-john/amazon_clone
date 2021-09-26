import React, {useContext} from 'react'
import '../styling/CartProducts.css'
import {ThisContext} from "./StateManger"


function CartProducts({id, description, image, price, index}) {



    const manageItems = useContext(ThisContext)
    const [dispatch] = [manageItems[1]];

    const readLess = "..."
    return (
        <div className="cartProducts">
        <div className="main__image"> 
            <img src={image} alt="product" />
            </div>
        <p className="description" style={{marginTop:description.length<32?"24px":null}}>{description.slice(0, 57)}{description.length>60?readLess:null}</p>
        <div className="buyIt"><small>$</small><p>{price}</p></div>
       
        <p className="availability">In stock</p>
        <p className="eligibility">Eligible for FREE Shipping</p>
   

        <img className="fulfilled" src="https://m.media-amazon.com/images/G/31/marketing/fba/fba-badge_18px._CB485936079_.png" alt="fulfiled" />
      
        <div className="checkList">
        <input type="checkbox" />
        <p>This will be a gift</p>
    

        </div>
        <button className="btn" 
        onClick={()=>{
            dispatch({type:"removeFromCart", itemToBeDeleted: {id}, subtractThis: {price}})
        }}>Delete</button>
        </div>
    )
}

export default CartProducts
