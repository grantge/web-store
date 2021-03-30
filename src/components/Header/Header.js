import React from 'react';

import '../Header/Header.css';
import cart from './images/cart.png';

function Header() {
  return (
    <header>
      <h1>Stardew Valley Market</h1>
      <p>
        <a href="">
          <img className="cart" src={cart} />
        </a>
      </p>
    </header>
  );
}

export default Header;
