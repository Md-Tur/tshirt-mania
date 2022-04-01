import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <div>
            <h2>Welcome to Tshirt mania.</h2>
            <nav>
                <Link to="/home">Home</Link>
                <Link to="/orderreview">Order review</Link>
                <Link to="/grandpa">Grandpa</Link>
            </nav>
        </div>
    );
};

export default Header;