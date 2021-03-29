import React from 'react';

import './GoodsRings.css';
import GoodsCard from '../GoodsCard/GoodsCard';

function GoodsRings() {
  function importAll(r) {
    let images = {};
    r.keys().map((item) => {
      return (images[item.replace('./', '')] = r(item));
    });
    return images;
  }

  const images = importAll(
    require.context('../GoodsCard/images/rings', false, /\.(png)$/)
  );

  return (
    <div className="nes-container with-title is-centered">
      <p className="title">Rings</p>
      <div className="container rings">
        <GoodsCard
          cartTitle={'Sturdy Ring'}
          image={images['Sturdy_Ring.png'].default}
          alt={'sturdy ring'}
          text={'Cuts the duration of negative status effects in half.'}
          price={20}
        />
        <GoodsCard
          cartTitle={'Ruby Ring'}
          image={images['Ruby_Ring.png'].default}
          alt={'ruby ring'}
          text={"Plays a random assortment of music you've heard."}
          price={20}
        />

        <GoodsCard
          cartTitle={'Glow Ring'}
          image={images['Glow_Ring.png'].default}
          alt={'glow ring'}
          text={'its a constant light.'}
          price={20}
        />
      </div>
    </div>
  );
}

export default GoodsRings;
