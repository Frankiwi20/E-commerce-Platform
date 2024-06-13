import React from 'react';
import './homepage.css';

const Home = () => {
    return (
        <div className="home-container">
            <header className="home-header">
                <h1>Welcome to Our E-Commerce Platform</h1>
                <p>Discover our amazing products and deals!</p>
            </header>
            <div className="home-content">
                <div className="home-intro">
                    <p>Your one-stop shop for all your needs.</p>
                    <button className="shop-now-button">Shop Now</button>
                </div>
                <div className="home-features">
                    <div className="feature-item">
                        <h3>Quality Products</h3>
                        <p>Only the best for our customers.</p>
                    </div>
                    <div className="feature-item">
                        <h3>Fast Delivery</h3>
                        <p>Get your items quickly and safely.</p>
                    </div>
                    <div className="feature-item">
                        <h3>Customer Support</h3>
                        <p>We are here to help you 24/7.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
