import React, { Component } from 'react';
import Header from './Header';
import Footer from './Footer'
import Cartitems from './Cartitems'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Cartitems/>
        <Footer />
      </div>
    );
  }
}

export default App;
