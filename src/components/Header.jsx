import React, { useContext, useEffect, useState } from 'react';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import "../styling/Header.css"
import SearchIcon from '@material-ui/icons/Search';
import { Link } from 'react-router-dom';
import {ThisContext} from "./StateManger.jsx"
import { useHistory } from "react-router-dom";
import { getAuth, signOut } from "firebase/auth";
function Header() {

  const manageItems = useContext(ThisContext)
const [{basket, user}, dispatch] = [manageItems[0], manageItems[1]];
const [manageLoggedIn, setmanageLoggedIn] = useState("SignIn");
let history = useHistory();
const auth = getAuth();

useEffect(() => {
  if(user!=="SignIn"){
    setmanageLoggedIn("SignOut")
  }
}, [user])

function notSignedIn() {
  if(user!=="SignIn"){
    signOut(auth).then(() => {
      dispatch({type:"loggedOut"})
      history.push("/")
      setmanageLoggedIn("SignIn")
    }).catch((error) => {
      alert(error)
    });
  }
}


  return (
    <div className="header" id="top">
      
<Link to="/">
<img className="amazonlogo" src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="amazon logo" />
</Link>

<div className="headerSearch">
<input type="text" className="headerInput" />
<SearchIcon className="searchIco" />
</div>

<div className="headerSideNav">
<Link to={user==="SignIn"&&"/login"} onClick={notSignedIn}
className="removeAnchor">
        <div className="header__option">
          <span className="header__optionLineOne">Hello </span>
          <span className="header__optionLineTwo">{manageLoggedIn}</span>
        </div>
</Link>
        <div className="header__option">
          <span className="header__optionLineOne">Returns</span>
          <span className="header__optionLineTwo">& Orders</span>
        </div>

        <div className="header__option">
        <span className="header__optionLineOne">Your</span>
        <span className="header__optionLineTwo">Prime</span>
        </div>    

<Link to="/shoppingBasket">
          <div className="header__optionBasket">
          <ShoppingBasketIcon className="basketIcon" />
          <span className="header__optionLineTwo header__basketCount">
            {basket?.length}
          </span>
          </div>
</Link>
</div>

</div>
  )
}

export default Header
