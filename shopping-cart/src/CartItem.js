import React from 'react';

const CartItem = (props) => {
    return props.cartItemsList.map(item => {
            return (
                <div className="list-group-item">
                    <div className="row">
                        <div className="col-md-8">{item.product.name}</div>
                        <div className="col-md-2">${item.product.priceInCents}</div>
                        <div className="col-md-2">{item.quantity}</div>
                    </div>
                </div>
            )
        })
}

export default CartItem