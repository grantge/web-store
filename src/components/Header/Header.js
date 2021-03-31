import React from 'react';

import '../Header/Header.css';
import cart from './images/cart.png';

function Header() {
  return (
    <header>
      <h1>Stardew Valley Market</h1>
      <div>
        <button>
          <img className="cart" src={cart} alt="cart" />
        </button>
        <h4 className="cart-score">{localStorage.length}</h4>
      </div>
    </header>
  );
}

export default Header;
