import React, {useContext} from 'react'
import { Link } from 'react-router-dom'
import "../styling/payment.css"
import {ThisContext} from "./StateManger.jsx"
var CurrencyFormat = require('react-currency-format');

function Payment() {

const manageItems = useContext(ThisContext)
const [{basket, TotalPrice}, dispatch] = [manageItems[0], manageItems[1]]

    return (
        <div className="payment">

                <Link to="/">
        <img className="loginImage paymentImg" alt="amazon" src="https://pngimg.com/uploads/amazon/amazon_PNG6.png" />
        </Link>
            <h1>Review your order</h1>
            <p>By placing your order, you agree to Amazon's privacy notice and conditions of use.</p>
        
<div className="reviewOrder">

        <div className="delivery">
   

            <div className="details">
                <div className="address">
                    <h3>Shipping address</h3>
                    <p>xxx xxx xxx</p>
                    <p>xxxxxx xxxxxx</p>
                    <p>xxxxxxx</p>
                    <p>xxxxxxxx, xxxxx xxxxxx</p>
                    <p>xxxx</p>
                    <p>Phone:xxxxxxxxxxx</p>
                </div>
                <div className="paymentMethod">
                    <h3>Pay on delivery</h3>
                </div>
            <div className="voucher">
                <h3>Gift cards, Voucher & Promotional codes</h3>
                <div className="coupounCode">
                <input type="text" placeholder="Enter Code" />
                <button className="registerBtn paymentApplyBtn">Apply</button>
                </div>
            </div>
            </div>

        <div className="delivery">
        <div className="orderedItems">
            <h1>Estimated delivery: 18 Sep 2021</h1>
        {
            Array(basket.length).fill().map((_, i) => {
               return <div className="paymentProducts">
               { console.log(basket[i].id.id)}
               <img src={basket[i].image.image} alt="product" />
               <div className="paymentContent">
               <h2>{basket[i].title.title}</h2>
                <p className="paymentPrice"><span>$ </span>{basket[i].price.price}</p>
                <p>Sold by: Trans Infopreneur Inc</p>
                <p>Gift options not available.</p>
                <button className="btn" onClick={()=>{
                    let id = basket[i].id.id
                    let price = basket[i].price.price
                    dispatch({type:"removeFromCart", itemToBeDeleted: {id}, subtractThis: {price}})
                }}>Remove</button>
                </div>
                </div>
            })
        }
        </div>
        </div>

        </div>

        <div className="placeOrder">
            <button className="continueBtn">Place your order</button>
            <h2>Order Summary</h2>
            <div className="orderSummary">

            <div className="text">
            <p>Items: </p>
            <p>Delivery: </p>
            <p>Total: </p>
            <p>Promotion Applied: </p>
            <h1>Order Total: </h1>
            </div>
            <div className="value">
            <p>${basket.length===0? 0 : <CurrencyFormat 
value={TotalPrice}
decimalScale={2}
displayType={'text'} 
thousandSeparator={true} />}</p>
            <p>$05.00</p>
            <p>${basket.length===0? 0 :<CurrencyFormat 
value={TotalPrice + 5}
decimalScale={2}
displayType={'text'} 
thousandSeparator={true} />}</p>
<p>-$05.00</p>
<h1>${basket.length===0? 0 :<CurrencyFormat 
value={TotalPrice}
decimalScale={2}
displayType={'text'} 
thousandSeparator={true} />}</h1>
            </div>
            </div>
        </div>
        </div>

        </div>

    )
}

export default Payment
