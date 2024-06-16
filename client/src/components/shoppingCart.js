import React from 'react';
import './shoppingCart.css';

function ShoppingCart() {
    return (
        <div className="shopping-cart-container">
            <h1>Your Shopping Cart</h1>
            <div className="cart-item">
                <img src="product-image-url" alt="Product Name" />
                <div className="item-info">
                    <p><strong>Product Name</strong></p>
                    <p><strong>Price:</strong> $100</p>
                    <div className="quantity-control">
                        <button>-</button>
                        <span>1</span>
                        <button>+</button>
                    </div>
                    <button className="remove-item">Remove</button>
                </div>
            </div>
            <div className="cart-summary">
                <p><strong>Total:</strong> $100</p>
                <button className="checkout-btn">Proceed to Checkout</button>
            </div>
        </div>
    );
}

export default ShoppingCart;
