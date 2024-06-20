import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from './cartContext';
import './shoppingCart.css';

function ShoppingCart() {
    const { cart, dispatch } = useCart();
    const navigate = useNavigate();

    const handleRemoveFromCart = (id) => {
        dispatch({ type: 'REMOVE_FROM_CART', payload: { _id: id } });
    };

    const handleIncrementQuantity = (id) => {
        dispatch({ type: 'INCREMENT_QUANTITY', payload: { _id: id } });
    };

    const handleDecrementQuantity = (id) => {
        dispatch({ type: 'DECREMENT_QUANTITY', payload: { _id: id } });
    };

    const handleCheckout = () => {
        navigate('/checkout');
    };

    const total = cart.reduce((sum, item) => sum + parseFloat(item.price.replace('$', '')) * item.quantity, 0);

    return (
        <div className="shopping-cart-container">
            <h1>Your Shopping Cart</h1>
            {cart.map(item => (
                <div key={item._id} className="cart-item">
                    <img src={item.image} alt={item.title} />
                    <div className="item-info">
                        <p><strong>{item.title}</strong></p>
                        <p><strong>Price:</strong> ${parseFloat(item.price.replace('$', '')).toFixed(2)}</p>
                        <div className="quantity-control">
                            <button onClick={() => handleDecrementQuantity(item._id)}>-</button>
                            <span>{item.quantity}</span>
                            <button onClick={() => handleIncrementQuantity(item._id)}>+</button>
                        </div>
                        <button className="remove-item" onClick={() => handleRemoveFromCart(item._id)}>Remove</button>
                    </div>
                </div>
            ))}
            <div className="cart-summary">
                <p><strong>Total:</strong> ${total.toFixed(2)}</p>
                <button className="checkout-btn" onClick={handleCheckout}>Proceed to Checkout</button>
            </div>
        </div>
    );
}

export default ShoppingCart;
