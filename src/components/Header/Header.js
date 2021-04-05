import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';

import '../Header/Header.css';
import cart from './images/cart.png';

function Header() {
  return (
    <header>
      <h1>Stardew Valley Market</h1>
      <div>
        <a href="/modal">
          <img className="cart" src={cart} alt="cart" />
        </a>

        <h4 className="cart-score">{localStorage.length}</h4>
      </div>
    </header>
  );
}

export default Header;
