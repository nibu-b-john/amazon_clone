import { useHistory } from "react-router-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Home";
import Header from "./Header";
import Footer from "./Footer";
import ShoppingBasket from "./ShoppingBasket";
import Login from "./Login.jsx";
import Payment from "./Payment.jsx";
import {ThisContext} from "./StateManger.jsx"
import { useContext } from "react";

function App() {
  const history = useHistory()
  const manageItems = useContext(ThisContext)
const [{basket}] = [manageItems[0]]
  return (
    <Router>
    <div className="App">
    
   
       
    <Switch>
      <Route exact path="/">
      <Header />
      <Home />
      <Footer />
      </Route>
      
      <Route exact path="/shoppingBasket">
      <Header />
      <ShoppingBasket />
      </Route>

      <Route exact path="/login">
     <Login />
      </Route>
      
      <Route exact path="/payment">
      {basket.length!==0&& <Payment />}
      </Route>

    </Switch>
       
    </div>
    </Router>
  );
}

export default App;
