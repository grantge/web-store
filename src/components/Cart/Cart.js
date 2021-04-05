import React from 'react';

import '../../components/Cart/Cart.css';
import { arrayPrice, item, price, total } from './cartData';

function Cart() {
  return (
    <div className="modal">
      <div className="nes-container is-white with-title container-modal">
        <p className="title">Cart</p>
        <p> {arrayPrice.length} items in your cart</p>
        <div className="cart-view">
          <ul>{item}</ul>

          <ul>{price}</ul>
        </div>
        <h4 className="total">Total: {total} </h4>
        <button type="button" className="nes-btn is-primary btn-modal">
          Primary
        </button>
      </div>
    </div>
  );
}

export default Cart;
