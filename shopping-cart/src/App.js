import React, { Component } from 'react';
import Header from './Header';
import Footer from './Footer'
import CartItems from './CartItems'
import './App.css';
class App extends Component {
  constructor(props){
  super(props)
  this.state = {
    cartItemsList:[
      { id: 1, product: { id: 40, name: 'Mediocre Iron Watch', priceInCents: 399 }, quantity: 1 },
      { id: 2, product: { id: 41, name: 'Heavy Duty Concrete Plate', priceInCents: 499 }, quantity: 2 },
      { id: 3, product: { id: 42, name: 'Intelligent Paper Knife', priceInCents: 1999 }, quantity: 1 },
    ]
  }}
  render() {
    return (
      <div className="App">
        <Header />
        <CartItems cartItemsList={this.state.cartItemsList}/>
        <Footer list="2018"/>
      </div>
    )
  }
}

export default App;
