import React from 'react';
import './CustomerSupport.css';

const CustomerSupport = () => {
    return (
        <div className="customer-support-container">
            <h1>Customer Support</h1>
            <p>If you have any questions or need assistance, please reach out to us using the form below.</p>
            <form>
                <label>Name:</label>
                <input type="text" name="name" required />

                <label>Email:</label>
                <input type="email" name="email" required />

                <label>Message:</label>
                <textarea name="message" required></textarea>

                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default CustomerSupport;
