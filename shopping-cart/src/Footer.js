import React from 'react';

const CartFooter = (props) => {
        return (
            <nav className="navbar navbar-dark bg-dark">
            <a className="navbar-brand" href="#">&copy; {props.list}</a>
            </nav>
        )
}


export default CartFooter
