import React from 'react';
import { Link } from 'react-router-dom';
import './sidebar.css';

function Sidebar({ isOpen, toggleSidebar }) {
    return (
        <div className={`sidebar ${isOpen ? 'open' : ''}`}>
            <button className="close-btn" onClick={toggleSidebar}>×</button>
            <nav>
                <Link to="/" onClick={toggleSidebar}>Home</Link>
                <Link to="/about" onClick={toggleSidebar}>About</Link>
                <Link to="/products" onClick={toggleSidebar}>Products</Link>
                <Link to="/products/:id" onClick={toggleSidebar}>Product Detail</Link>
                <Link to="/cart" onClick={toggleSidebar}>Shopping Cart</Link>
                <Link to="/checkout" onClick={toggleSidebar}>Checkout</Link>
                <Link to="/login" onClick={toggleSidebar}>Login</Link>
                <Link to="/register" onClick={toggleSidebar}>Register</Link>
                <Link to="/profile" onClick={toggleSidebar}>Profile</Link>
            </nav>
        </div>
    );
}

export default Sidebar;
