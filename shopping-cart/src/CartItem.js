import React from 'react'


class CartItem extends Component {
  render() {
    return (
      <div className="list-group-item">
        <div className="row">
          <div className="col-md-8">{this.props.item.product.name}</div>
          <div className="col-md-2">{'$' + (this.props.item.product.priceInCents / 100).toFixed(2)}</div>
          <div className="col-md-2">{this.props.item.quantity}</div>
        </div>
      </div>
    )
  }
}

export default CartItem