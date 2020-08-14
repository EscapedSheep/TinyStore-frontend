import React from 'react';
import './App.css';
import {BrowserRouter as Router, Link} from 'react-router-dom';
import {Route, Switch} from "react-router";
import Products from './components/Products';
import Order from './components/Order';

function App() {
  return (
    <div className="App">
        <Router>
            <ul>
                <li>
                    <Link to="/products">商城</Link>
                </li>
                <li>
                    <Link to="/order">订单</Link>
                </li>
            </ul>
            <Switch>
              <Route exact path="/products" component={Products}></Route>
              <Route exact path="/order" component={Order}></Route>
            </Switch>
        </Router>
    </div>
  );
}

export default App;
