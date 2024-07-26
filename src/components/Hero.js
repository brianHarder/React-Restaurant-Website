import React from 'react';
import { Link } from 'react-router-dom';

function Hero() {
  return (
    <section className="hero">
      <div className="hero-text-container">
        <h1 className="hero-title">Little Lemon</h1>
        <p className="hero-subtitle">Chicago</p>
        <p className="hero-description">
          We are a Mediterranean restaurant, family owned for 40 years, focused on traditional recipes served with a modern twist!
        </p>
        <Link to="/reservations">
          <button className="reserve-button">Reserve a Table</button>
        </Link>
      </div>
      <div className="hero-image-container">
        <img src="/restaurant-interior.jpg" alt="Restaurant Interior" className="hero-image" />
      </div>
    </section>
  );
}

export default Hero;
