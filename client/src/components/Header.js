import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function Header({ toggleSidebar }) {
    return (
        <header className="header">
            <h1 className="header-title">AlgoMart</h1>
            <div className="header-links">
                <Link to="/profile">Profile</Link>
                <Link to="/cart">Cart</Link>
            </div>
        </header>
    );
}

export default Header;
