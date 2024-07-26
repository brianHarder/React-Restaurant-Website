import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="header">
      <div className="logo">
        <Link to="/">
          <img src="logo.jpg" alt="Little Lemon" className="logo-image" />
        </Link>
      </div>
      <nav>
        <ul className="nav-list">
          <li className="nav-item">
            <Link to="/" className="nav-link">Home</Link>
          </li>
          <li className="nav-item">
            <Link to="/about" className="nav-link">About</Link>
          </li>
          <li className="nav-item">
            <Link to="/menu" className="nav-link">Menu</Link>
          </li>
          <li className="nav-item">
            <Link to="/reservations" className="nav-link">Reservations</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
