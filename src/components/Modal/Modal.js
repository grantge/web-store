import React from 'react';

import '../../components/Modal/Modal.css';

function Modal() {
  const arrayItem = Object.keys(localStorage);
  const item = arrayItem.map((el) => {
    return <li>{el}</li>;
  });

  const arrayPrice = Object.values(localStorage);
  const price = arrayPrice.map((el) => {
    return <li>{el}z</li>;
  });

  const total = arrayPrice.reduce((a, b) => {
    return +a + +b;
  });

  return (
    <div className="modal">
      <div className="nes-container is-white with-title container-modal">
        <p className="title">Cart</p>
        <p>item in your cart</p>
        <div className="cart-view">
          <ul>{item}</ul>

          <ul>{price}</ul>
        </div>
        <h4>Total: {total} </h4>
        <button type="button" className="nes-btn is-primary btn-modal">
          Primary
        </button>
      </div>
    </div>
  );
}

export default Modal;
