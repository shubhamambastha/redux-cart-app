import React from 'react';
import './App.css';
import Header from './components/header';
import List from './components/lists';
import Cart from './components/cart';
import { connect } from "react-redux";

class App extends React.Component{

  render(){
    return (
      <div>
        <Header/>
        <div className="main-area">
          <List />
          <Cart />
        </div>
      </div>
    );
  }
}

export default App;