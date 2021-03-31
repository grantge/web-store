import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import '../Header/Header.css';
import cart from './images/cart.png';
import Modal from '../Modal/Modal';

function Header() {
  return (
    <Router>
      <header>
        <h1>Stardew Valley Market</h1>
        <div>
          <Link to="/modal">
            <img className="cart" src={cart} alt="cart" />
          </Link>
          <h4 className="cart-score">{localStorage.length}</h4>
        </div>
      </header>

      <Switch>
        <Route path="/modal">
          <Modal />
        </Route>
      </Switch>
    </Router>
  );
}

export default Header;
