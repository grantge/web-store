import React from 'react';

import './GoodsFood.css';
import GoodsCard from '../GoodsCard/GoodsCard';

function GoodsFood() {
  function importAll(r) {
    let images = {};
    r.keys().map((item) => {
      return (images[item.replace('./', '')] = r(item));
    });
    return images;
  }

  const images = importAll(
    require.context('../GoodsCard/images/food', false, /\.(png)$/)
  );

  return (
    <div className="nes-container with-title is-centered">
      <p className="title">Food</p>
      <div className="container">
        <GoodsCard
          cartTitle={'Omelet'}
          image={images['Omelet.png'].default}
          alt={'omelet'}
          text={"It's super fluffy."}
          price={20}
        />

        <GoodsCard
          cartTitle={'Sal Dinner'}
          image={images['Salmon_Dinner.png'].default}
          alt={'salmon'}
          text={'The lemon spritz makes it special.'}
        />

        <GoodsCard
          cartTitle={'Salad'}
          image={images['Salad.png'].default}
          alt={'salad'}
          text={'A healthy garden salad.'}
        />

        <GoodsCard
          cartTitle={'Pizza'}
          image={images['Pizza.png'].default}
          alt={'pizza'}
          text={"It's popular for all the right reasons."}
        />

        <GoodsCard
          cartTitle={'Spaghetti'}
          image={images['Spaghetti.png'].default}
          alt={'spaghetti'}
          text={'An old favorite.'}
        />

        <GoodsCard
          cartTitle={'Breakfast'}
          image={images['Complete_Breakfast.png'].default}
          alt={'breakfast'}
          text={"You'll feel ready to take on the world!"}
        />

        <GoodsCard
          cartTitle={'Pancakes'}
          image={images['Pancakes.png'].default}
          alt={'pancakes'}
          text={'A double stack of fluffy, soft pancakes.'}
        />

        <GoodsCard
          cartTitle={'Ice Cream'}
          image={images['Ice_Cream.png'].default}
          alt={'ice cream'}
          text={"It's hard to find someone who doesn't like this"}
        />
      </div>
    </div>
  );
}

export default GoodsFood;
