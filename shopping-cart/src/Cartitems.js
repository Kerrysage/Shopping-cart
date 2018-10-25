import React from 'react'
import CartItem from './CartItem.js'

const CartItems = ({ cartItemsList, total }) => {
  return (
    <div className="container">
  <h1>Cart Items</h1>
  <div className="list-group">
    <div className="list-group-item">
      <div className="row">
        <div className="col-md-8">Product</div>
        <div className="col-md-2">Price</div>
        <div className="col-md-2">Quantity</div>
      </div>
    </div>
    {cartItemsList.map(item => {
      return <CartItem name={item.product.name} price={'$' + item.product.priceInCents / 100} quantity={item.quantity}/>
    })}
    {/* <div>
      Total Price: ${this.props.total(props.list)}
    </div> */}
  </div>
</div>
  )
}
export default CartItems