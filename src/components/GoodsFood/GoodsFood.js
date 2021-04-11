import React from 'react';

import './GoodsFood.css';
import GoodsCard from '../GoodsCard/GoodsCard';

function GoodsFood(props) {
  const food = props.foodArray.map((item) => {
    return (
      <GoodsCard
        key={item.id}
        cartTitle={item.cardTitle}
        image={item.image}
        alt={item.alt}
        text={item.text}
        price={item.price}
      />
    );
  });

  return (
    <div className="nes-container with-title is-centered">
      <p className="title">Food</p>
      <div className="container food">{food}</div>
    </div>
  );
}

export default GoodsFood;
