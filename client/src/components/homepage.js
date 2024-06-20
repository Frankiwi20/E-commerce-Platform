import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './homepage.css';

const Home = () => {
    const [showQualityInfo, setShowQualityInfo] = useState(false);
    const [showShippingInfo, setShowShippingInfo] = useState(false);

    const handleMouseEnterQuality = () => {
        setShowQualityInfo(true);
    };

    const handleMouseLeaveQuality = () => {
        setShowQualityInfo(false);
    };

    const handleMouseEnterShipping = () => {
        setShowShippingInfo(true);
    };

    const handleMouseLeaveShipping = () => {
        setShowShippingInfo(false);
    };

    return (
        <div className="home-container">
            <header className="home-header">
                <h1>Welcome to Our E-Commerce Platform AlgoMart!</h1>
                <p>Discover our amazing products and deals!</p>
            </header>
            <div className="home-content">
                <div className="home-intro">
                    <p>Your one-stop shop for all your needs.</p>
                    <Link to="/products" className="shop-now-button">Shop Now</Link>
                </div>
                <div className="home-features">
                    <div
                        className="feature-item"
                        onMouseEnter={handleMouseEnterQuality}
                        onMouseLeave={handleMouseLeaveQuality}
                    >
                        <h3>Quality Products</h3>
                        <p>Only the best for our customers.</p>
                        {showQualityInfo && (
                            <div className="quality-info">
                                <p>We ensure the highest quality standards for our products.</p>
                            </div>
                        )}
                        <div className="discover-link">Discover!</div>
                    </div>
                    <div
                        className="feature-item"
                        onMouseEnter={handleMouseEnterShipping}
                        onMouseLeave={handleMouseLeaveShipping}
                    >
                        <h3>Fast Delivery</h3>
                        <p>Get your items quickly and safely.</p>
                        {showShippingInfo && (
                            <div className="shipping-info">
                                <p>Our shipping is reliable and fast, ensuring your items arrive on time.</p>
                            </div>
                        )}
                        <div className="learn-more-link">Learn more</div>
                    </div>
                    <div className="feature-item">
                        <h3>Customer Support</h3>
                        <p>We are here to help you 24/7.</p>
                        <Link to="/support" className="support-link">Contact Support</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
