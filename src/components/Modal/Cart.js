import React from 'react';

import '../../components/Cart/Cart.css';

function Modal() {
  const arrayItem = Object.keys(localStorage);
  const item = arrayItem.map((el) => {
    return <li className="price-name">{el}</li>;
  });

  const arrayPrice = Object.values(localStorage);
  const price = arrayPrice.map((el) => {
    return (
      <li>
        {el}z <button className="btn-remove nes-btn is-warning">X</button>
      </li>
    );
  });

  let total = '';

  if (arrayPrice.length === 0) {
    total = 0;
  } else {
    total = arrayPrice.reduce((a, b) => {
      return +a + +b;
    });
  }

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
