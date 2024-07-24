import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
    return (
        <ul>
            <li><Link to="/home">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/menu">Menu</Link></li>
            <li><Link to="/reservations">Reservations</Link></li>
            <li><Link to="/order-online">Order Online</Link></li>
        </ul>
    );
};

export default Nav;
