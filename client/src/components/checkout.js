import React, { useState } from 'react';
import './checkout.css';

function Checkout() {
    const [shippingInfo, setShippingInfo] = useState({
        name: '',
        address: '',
        city: '',
        state: '',
        zip: ''
    });

    const [paymentInfo, setPaymentInfo] = useState({
        cardNumber: '',
        expirationDate: '',
        cvv: ''
    });

    const handleShippingChange = (e) => {
        const { name, value } = e.target;
        setShippingInfo({
            ...shippingInfo,
            [name]: value
        });
    };

    const handlePaymentChange = (e) => {
        const { name, value } = e.target;
        setPaymentInfo({
            ...paymentInfo,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log('Shipping Info:', shippingInfo);
        console.log('Payment Info:', paymentInfo);
    };

    return (
        <div className="checkout-container">
            <h1>Checkout</h1>
            <form onSubmit={handleSubmit}>
                <h2>Shipping Information</h2>
                <input
                    type="text"
                    name="name"
                    placeholder="Full Name"
                    value={shippingInfo.name}
                    onChange={handleShippingChange}
                    required
                />
                <input
                    type="text"
                    name="address"
                    placeholder="Address"
                    value={shippingInfo.address}
                    onChange={handleShippingChange}
                    required
                />
                <input
                    type="text"
                    name="city"
                    placeholder="City"
                    value={shippingInfo.city}
                    onChange={handleShippingChange}
                    required
                />
                <input
                    type="text"
                    name="state"
                    placeholder="State"
                    value={shippingInfo.state}
                    onChange={handleShippingChange}
                    required
                />
                <input
                    type="text"
                    name="zip"
                    placeholder="Zip Code"
                    value={shippingInfo.zip}
                    onChange={handleShippingChange}
                    required
                />

                <h2>Payment Information</h2>
                <input
                    type="text"
                    name="cardNumber"
                    placeholder="Card Number"
                    value={paymentInfo.cardNumber}
                    onChange={handlePaymentChange}
                    required
                />
                <input
                    type="text"
                    name="expirationDate"
                    placeholder="Expiration Date (MM/YY)"
                    value={paymentInfo.expirationDate}
                    onChange={handlePaymentChange}
                    required
                />
                <input
                    type="text"
                    name="cvv"
                    placeholder="CVV"
                    value={paymentInfo.cvv}
                    onChange={handlePaymentChange}
                    required
                />
                <button type="submit" className="checkout-btn">Place Order</button>
            </form>
        </div>
    );
}

export default Checkout;
