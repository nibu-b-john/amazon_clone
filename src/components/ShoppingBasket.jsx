
import React, { useState, useContext} from 'react';
import "../styling/ShoppingBasket.css";
import CartProducts from './CartProducts';
import { ThisContext } from './StateManger'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import { Link } from 'react-router-dom';

var CurrencyFormat = require('react-currency-format');



function ShoppingBasket() {


    const [ifset, setifSet] = useState({
        firstPara: true,
        secondPara: false
    });
    
    const [editPara, setEditPara] = useState("No items to Buy again.");
 
    function hello(){

         setifSet({
            firstPara: true,
        secondPara: false 
         })
         setEditPara("No items to Buy again.")
        
    }

    function bye(){
     setifSet({
            firstPara: false,
        secondPara: true 
         })
     setEditPara("")
    }

    const manageItems = useContext(ThisContext)
    const [{basket, TotalPrice}] = [manageItems[0]];

    return (
        <div className="shoppingBasket">

            <div className="shoppingCart">
            <div className="cartSubtotal">

            <div className="cartSubtotal__heading">
            {basket.length===0?
            <div className="firstChoice">
                <ShoppingCartIcon className="shoppingCartIcon" />
            <div className="ifEmpty">
            <h1>Your Amazon Basket is empty</h1>
            <p>See recommendations</p></div></div>
            :<h1 className="ifNotEmpty">Shopping Cart</h1>}
            </div>
                
                <div className="productContainer">

        {Array(basket.length).fill().map((_, index)=>{
            return <div className="red" key={index}>
             <CartProducts
                 
    id={basket[index].id.id}
    description={basket[index].description.description}
    price={basket[index].price.price}
    image={basket[index].image.image}
    index={index}
             />
             </div>
            
        })}

            </div>
            <div className="productContainer__subtotal">
<h2>Subtotal ({basket.length} items): $
{basket.length===0? 0 : <CurrencyFormat 
value={TotalPrice}
decimalScale={2}
displayType={'text'} 
thousandSeparator={true} />}


</h2>
</div>

</div>


            <div className="yourItems">
                <h1>Your Items</h1>
                <div className="saved">
                <div className="savedItems">
                <p onClick={bye} style={{ textDecoration: ifset.secondPara ? "underline overline #E47911" : "none", 
                                        textUnderlineOffset: "3px",
                                        fontWeight: ifset.secondPara ? "700" : "normal",
                                        color: ifset.secondPara ? "black" : "#007185"
                }} >No items saved for later</p>


                <p onClick={hello} style={{ textDecoration: ifset.firstPara  ? "underline overline #E47911" : "none",
                                            textUnderlineOffset: "3px",
                                            fontWeight: ifset.firstPara ? "700" : "normal",
                                            color: ifset.firstPara ? "black" : "#007185"}
                                            }
                >Buy it again</p>

                </div>
                <p className="paratag">{ifset.firstPara?editPara:editPara}</p>
                </div>
            </div>
</div>

<div className="relatedItems">
<img src="	https://images-eu.ssl-images-amazon.com/images/G/31/checkout/assets/TM_desktop._CB443006202_.png" alt="amazon purchase protection" />
    <div className="subtotal">
    <div className="subtotal__para">

        <CheckCircleIcon />
        <div className="checkboxPara">
        <p>Your order is eligible for FREE Delivery.</p>
        <p>Select this option at checkout</p>
        </div>
</div>
      {basket.length===0?<h2>No items selected</h2>: 
      <div>
       <h2>Subtotal ({basket.length} items): ${basket.length===0? 0 : <CurrencyFormat 
value={TotalPrice}
decimalScale={2}
displayType={'text'} 
thousandSeparator={true} />}

</h2>
        <div className="inputPara">
            <input type="checkbox" />
            <p>This order contains a gift</p>
        </div>
        </div>}
<Link to={basket.length!==0&&"/payment"}>
        <button className="btn totalbtn">Proceed to Buy</button>
</Link>
    </div>
    <div className="sponseredItems"></div>
</div>

        </div>
    )
}

export default ShoppingBasket
