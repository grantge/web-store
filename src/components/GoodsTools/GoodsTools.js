import React from 'react';

import './GoodsTools.css';
import GoodsCard from '../GoodsCard/GoodsCard';

function GoodsTools(props) {
  const tools = props.toolsArray.map((item) => {
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
      <p className="title">Tools</p>
      <div className="container tools">{tools}</div>
    </div>
  );
}

export default GoodsTools;
