import React from 'react';

import './GoodsTools.css';
import GoodsCard from '../GoodsCard/GoodsCard';

// Data
import toolsArray from '../GoodsTools/toolsData';

function GoodsTools() {
  const tools = toolsArray.map((item) => {
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
      <p className="title">Tools</p>
      <div className="container tools">{tools}</div>
    </div>
  );
}

export default GoodsTools;
