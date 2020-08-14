import React from 'react';
import './App.css';
import {BrowserRouter as Router, Link} from 'react-router-dom';
import {Route, Switch} from "react-router";
import Products from './components/Products';

function App() {
  return (
    <div className="App">
        <Router>
            <ul>
                <li>
                    <Link to="/products">商城</Link>
                </li>
            </ul>
            <Switch>
            <Route exact path="/products" component={Products}></Route>
            </Switch>
        </Router>
    </div>
  );
}

export default App;
