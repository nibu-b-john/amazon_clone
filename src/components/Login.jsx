import React, {useState, useContext} from 'react'
import { useHistory } from 'react-router';
import {auth, createUserWithEmailAndPassword, signInWithEmailAndPassword} from '../firebase.js'
import "../styling/Login.css"
import { Link } from 'react-router-dom';
import {ThisContext} from "./StateManger";

function Login() {
const history = useHistory()
const [email, setemail] = useState("");
const [password, setPassword] = useState("");
const manageItems = useContext(ThisContext)
const [dispatch] = [ manageItems[1]]

function register(event) {
  event.preventDefault();
  createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    if(userCredential){
dispatch({type:"loggedIn", ifloggedIn:"SignOut"})
  history.push('/')
}
  })
  .catch((error) => {
 
    const errorMessage = error.message;
    console.log(errorMessage);
  });
}

function signIn(event) {
event.preventDefault();
  signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    dispatch({type:"loggedIn", ifloggedIn:"SignOut"})
      history.push('/')
  })
  .catch((error) => {
    const errorMessage = error.message;
    console.log(errorMessage);
  });
}


return (
        <div className="login">
        <Link to="/">
        <img className="loginImage" alt="amazon" src="https://pngimg.com/uploads/amazon/amazon_PNG6.png" />
        </Link>
      <form className="signIn">

<h2>Sign-In</h2>

<p className="inputPara">Email</p>
<input type="email" onChange={(event)=>{
setemail(event.target.value)
}}  />

        <br />

        <p className="inputPara">Password</p>
        <input type="password" onChange={(event)=>{
setPassword(event.target.value)}} />

         <br />

        <button type="submit" className="continueBtn"  onClick={signIn}>Continue</button>
          <p className="disclaimerPara">By continuing, you agree to Amazon's Conditions of Use and Privacy Notice.</p>
      </form>

        <button type="submit" className="continueBtn registerBtn" onClick={register}>Create your Amazon account</button>
        </div>
    )
}

export default Login
