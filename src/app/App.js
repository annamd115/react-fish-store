import React, { Component } from 'react';
import './App.css';
import SingleOrder from '../components/SingleOrder/SingleOrder';
import Register from '../components/Register/Register';
import OrderSpa from '../components/OrderSpa/OrderSpa';
import Order from '../components/Order/Order';
import New from '../components/New/New';
import Navbar from '../components/Navbar/Navbar';
import Login from '../components/Login/Login';
import Inventory from '../components/Inventory/Inventory';
import Home from '../components/Home/Home';
import Fish from '../components/Fish/Fish';



class App extends Component {
  render() {
    return (
      <div className="App">
        <Fish />
        <Home />
        <Inventory />
        <Login />
        <Navbar />
        <New />
        <Order />
        <OrderSpa />
        <Register />
        <SingleOrder />
      </div>
    );
  }
}

export default App;
