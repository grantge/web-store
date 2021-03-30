import React from 'react';

import './GoodsRings.css';
import GoodsCard from '../GoodsCard/GoodsCard';

// Data
import ringsArray from './ringsData';

function GoodsRings() {
  const rings = ringsArray.map((item) => {
    return (
      <GoodsCard
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
      <p className="title">Rings</p>
      <ul className="container rings">{rings}</ul>
    </div>
  );
}

export default GoodsRings;
