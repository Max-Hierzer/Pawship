import React from 'react';
import Navigation from './Navigation';
import './Header.css';
import logo from './logo.jpg';

function Header() {
    return (
        <header>
            <div className="container">
                <a href="/" className="logo">
                    <img src={logo} alt="Tierheim Logo" />
                </a>
                <Navigation />
            </div>
        </header>
    );
}

export default Header;
