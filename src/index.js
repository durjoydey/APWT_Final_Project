import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Home from './Components/Home';
import User from './Components/User';
import Head from './Components/Head';
import Foot from './Components/Foot';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import UserDetails from './Components/UserDetails';
import ColorState from './Components/ColorState';
import EffectHookCheck from './Components/EffectHookCheck';
import Userlist from './Components/Userlist';
import Deliveryconlist from './Components/Deliveryconlist';
import ProductList from './Components/ProductList';
import Orderdetailslist from './Components/Orderdetailslist';
import Orderlist from './Components/Orderlist';
import Createuser from './Components/Createuser';
import Login from './Components/Login';
import axios from "axios";

var token = null;
if(localStorage.getItem('user')){
  var obj = JSON.parse(localStorage.getItem('user'));
  token = obj.access_token;
}
axios.defaults.baseURL="http://127.0.0.1:8000/api/";
axios.defaults.headers.common["Authorization"] = token;

ReactDOM.render(
  <React.StrictMode>
<Router>
      <Head/>
      <Switch>
        <Route exact path="/">
          <Home/>
        </Route>
        <Route exact path="/User">
          <User/>
        </Route>
        <Route exact path="/user/:id">
          <UserDetails/>
        </Route>
        <Route exact path="/color">
          <ColorState/>
        </Route>
        <Route exact path="/effect">
          <EffectHookCheck/>
        </Route>
        <Route exact path="/userlist">
          <Userlist/>
        </Route>
        <Route exact path="/deliveryconlist">
          <Deliveryconlist/>
        </Route>
        <Route exact path="/Productlist">
          <ProductList/>
        </Route>
        <Route exact path="/Orderlist">
          <Orderlist/>
        </Route>
        <Route exact path="/orderdetailslist">
          <Orderdetailslist/>
        </Route>
        <Route exact path="/createuser">
          <Createuser/>
        </Route>
        <Route exact path="/login">
          <Login/>
        </Route>
        </Switch>
      <Foot/>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
  );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();