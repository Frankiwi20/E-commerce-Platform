import React from 'react';
import { useCart } from './cartContext';
import './OrderConfirmation.css';

function OrderConfirmation() {
    const { cart, dispatch } = useCart();
    const checkoutInfo = JSON.parse(localStorage.getItem('checkoutInfo')) || {};

    React.useEffect(() => {
        // Clear the cart after order confirmation
        dispatch({ type: 'CLEAR_CART' });
    }, [dispatch]);

    return (
        <div className="order-confirmation-container">
            <h1>Order Confirmation</h1>
            <div className="checkout-info">
                <h2>Shipping Information</h2>
                <p><strong>Name:</strong> {checkoutInfo.name}</p>
                <p><strong>Address:</strong> {checkoutInfo.address}</p>
                <p><strong>City:</strong> {checkoutInfo.city}</p>
                <p><strong>State:</strong> {checkoutInfo.state}</p>
                <p><strong>Zip:</strong> {checkoutInfo.zip}</p>
            </div>
            <div className="order-summary">
                <h2>Order Summary</h2>
                {cart.map(item => (
                    <div key={item._id} className="order-item">
                        <img src={item.image} alt={item.title} />
                        <div>
                            <p><strong>{item.title}</strong></p>
                            <p><strong>Price:</strong> ${parseFloat(item.price.replace('$', '')).toFixed(2)}</p>
                            <p><strong>Quantity:</strong> {item.quantity}</p>
                        </div>
                    </div>
                ))}
                <div className="total">
                    <p><strong>Total:</strong> ${cart.reduce((total, item) => total + parseFloat(item.price.replace('$', '')) * item.quantity, 0).toFixed(2)}</p>
                </div>
            </div>
        </div>
    );
}

export default OrderConfirmation;
