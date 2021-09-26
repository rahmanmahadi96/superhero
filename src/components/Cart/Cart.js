import React from 'react';
import './Cart.css';

const Cart = (props) => {
    const {cart} = props || {};
    let total = 0;
   
    
    for(const item of cart){
        total = total + item.price;
   }

    return (
        <div className="cart">
            <h3>Order Summary</h3>
            <h5>Items Ordered: {props.cart.length}</h5>
            <ul>
                {
                    cart.map((item, index) => <li key={index}>{item.name}</li>)
                }
            </ul>
            <h3><small>Total</small> {total.toFixed(2)}</h3>
            <button className="check-out">Check Out</button>
        </div>
    );
};

export default Cart;