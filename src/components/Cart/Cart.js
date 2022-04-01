import React from 'react';
import './Cart.css';

const Cart = ({ cart, handleRemoveFromCart }) => {
    let command;
    if (cart.length === 0) {
        command = <p>Please add items.</p>
    }
    else if (cart.length === 1) {
        command = <p>Please add more.</p>
    }
    else {
        command = <p>Thanks for adding.</p>
    }
    return (
        <div>
            <h2>Selected Items: {cart.length}</h2>
            {command}
            {
                cart.map(tshirt => <p>
                    {tshirt.name}
                    <button onClick={() => handleRemoveFromCart(tshirt)}>X</button>
                </p>)
            }
        </div>
    );
};

export default Cart;