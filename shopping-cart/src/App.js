import React, { Component } from 'react';
import Header from './Header';
import Footer from './Footer'
import CartItems from './CartItems'
import CartItem from './CartItem'
import AddItems from './AddItems'
import './App.css';

class App extends Component {
  constructor(props){
  super(props)
  this.state = {
    cartItemsList:[
      { id: 1, product: { id: 40, name: 'Mediocre Iron Watch', priceInCents: 399 }, quantity: 1 },
      { id: 2, product: { id: 41, name: 'Heavy Duty Concrete Plate', priceInCents: 499 }, quantity: 2 },
      { id: 3, product: { id: 42, name: 'Intelligent Paper Knife', priceInCents: 1999 }, quantity: 1 },

    ], 

    AddItemList:[
      { id: 40, name: 'Mediocre Iron Watch', priceInCents: 399 },
      { id: 41, name: 'Heavy Duty Concrete Plate', priceInCents: 499 },
      { id: 42, name: 'Intelligent Paper Knife', priceInCents: 1999 },
      { id: 43, name: 'Small Aluminum Keyboard', priceInCents: 2500 },
      { id: 44, name: 'Practical Copper Plate', priceInCents: 1000 },
      { id: 45, name: 'Awesome Bronze Pants', priceInCents: 399 },
      { id: 46, name: 'Intelligent Leather Clock', priceInCents: 2999 },
      { id: 47, name: 'Ergonomic Bronze Lamp', priceInCents: 40000 },
      { id: 48, name: 'Awesome Leather Shoes', priceInCents: 3990 },
], 
    currentName: null,
    currentPride: null,
    currentQuantity: null,
    currentTotal: 0
  }
}
  modProduct = (e) => {
    e.preventDefault()
    if(product.name === e.target.value) {
      this.setState({currentName: product.name})
      this.setState({currentPrice: product.priceInCents})
      this.setState({currentId: product.id})
    }
  }

    modQuantity = (e) => {
      e.preventDefault()
      this.setState({currentQuantity: e.target.value})
    }

    total = (arr) => {
      var counter = 0
      arr.map(item => {
        counter += ((item.priceInCents * item.quantity) / 100)
      })
      return counter
    }

    modify = () => {
      const newcart = this.state.cartItemsList.concat({id: this.state.cartItemsList.length+1, product: {id: this.state.currentId, name: this.state.currentName, priceInCents: this.state.currentPrice}, quantity: this.state.currentQuantity})
        this.setState({cartItemsList: newcart}, () => (this.state))
        var counter = 0
    }

  render() {
    return (
      <div >
        <Header />
        <CartItems cartItemsList={this.state.cartItemsList} total={this.total}/>>
        <AddItems AddItemList={this.state.AddItemList} modify={this.modify} modQuantity={this.modQuantity} modProduct={this.modProduct}/> 
        <Footer list="2018"/>
      </div>
    )
  }
}

export default App;
