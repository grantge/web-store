import React from 'react';

import './GoodsTools.css';
import GoodsCard from '../GoodsCard/GoodsCard';

function GoodsTools() {
  function importAll(r) {
    let images = {};
    r.keys().map((item) => {
      return (images[item.replace('./', '')] = r(item));
    });
    return images;
  }

  const images = importAll(
    require.context('../GoodsCard/images/tools', false, /\.(png)$/)
  );

  return (
    <div className="nes-container with-title is-centered">
      <p className="title">Tools</p>
      <div className="container tools">
        <GoodsCard
          cartTitle={'Slingshot'}
          image={images['Slingshot.png'].default}
          alt={'slingshot'}
          text={"It's super fluffy."}
          price={20}
        />

        <GoodsCard
          cartTitle={'Wood Mallet'}
          image={images['Wood_Mallet.png'].default}
          alt={'wood mallet'}
          text={"It's super fluffy."}
          price={20}
        />

        <GoodsCard
          cartTitle={'Wooden Blade'}
          image={images['Wooden_Blade.png'].default}
          alt={'wooden blade'}
          text={"It's super fluffy."}
          price={20}
        />
      </div>
    </div>
  );
}

export default GoodsTools;
