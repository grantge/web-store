import React from 'react';

import './GoodsTable.css';
import GoodsCart from '../GoodsCart/GoodsCart';

function GoodsTable() {
  function importAll(r) {
    let images = {};
    r.keys().map((item) => {
      return (images[item.replace('./', '')] = r(item));
    });
    return images;
  }

  const images = importAll(
    require.context('../GoodsCart/images/food', false, /\.(png)$/)
  );

  return (
    <div className="nes-container with-title is-centered">
      <p className="title">Food</p>
      <div className="container">
        <GoodsCart
          cartTitle={'Omelete'}
          image={images['Omelet.png'].default}
          alt={'omlete'}
          text={"It's super fluffy."}
          price={20}
        />

        <GoodsCart
          cartTitle={'Sal Dinner'}
          image={images['Salmon_Dinner.png'].default}
          alt={'salmon'}
          text={"Good morning. Thou hast had a good night's sleep, I hope."}
        />

        <GoodsCart
          cartTitle={'Salad'}
          image={images['Salad.png'].default}
          alt={'salad'}
          text={"Good morning. Thou hast had a good night's sleep, I hope."}
        />

        <GoodsCart
          cartTitle={'Pizza'}
          image={images['Pizza.png'].default}
          alt={'pizza'}
          text={"Good morning. Thou hast had a good night's sleep, I hope."}
        />

        <GoodsCart
          cartTitle={'Spaghetti'}
          image={images['Spaghetti.png'].default}
          alt={'spaghetti'}
          text={"Good morning. Thou hast had a good night's sleep, I hope."}
        />

        <GoodsCart
          cartTitle={'Breakfast'}
          image={images['Complete_Breakfast.png'].default}
          alt={'breakfast'}
          text={"Good morning. Thou hast had a good night's sleep, I hope."}
        />

        <GoodsCart
          cartTitle={'Pancakes'}
          image={images['Pancakes.png'].default}
          alt={'pancakes'}
          text={'A double stack of fluffy, soft pancakes.'}
        />

        <GoodsCart
          cartTitle={'Pizza'}
          image={images['Pizza.png'].default}
          alt={'pizza'}
          text={"Good morning. Thou hast had a good night's sleep, I hope."}
        />
      </div>
    </div>
  );
}

export default GoodsTable;
