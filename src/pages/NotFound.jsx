import React from 'react';
import { Link } from 'react-router-dom';
import './NotFound.css';

function NotFound() {
  return (
    <main className="not-found-page">
      <div className="not-found-container">
        <div className="not-found-illustration">
          <img
            src="/images/not-found-cart.png"
            alt="Empty Cart"
            className="not-found-cart"
          />
        </div>
        <h1>404</h1>
        <p className="not-found-description">
          Oops! The page you're looking for doesn't exist.
        </p>
        <p className="not-found-subtext">
          It might have been moved, deleted, or you entered the wrong URL.
        </p>
        <div className="error-buttons">
          <Link to="/" className="home-button">
            Go to Home
          </Link>
          <Link to="/product" className="products-button">
            Browse Products
          </Link>
        </div>
      </div>
    </main>
  );
}

export default NotFound;
