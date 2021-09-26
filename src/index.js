import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import StateManger from "./components/StateManger.jsx";

ReactDOM.render(

  <div className="main">
      <StateManger >
    <App />
    </StateManger>
    </div>
    
    , document.getElementById('root')
);


