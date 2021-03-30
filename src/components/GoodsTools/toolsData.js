// function that gives us tools image
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

// Data
const toolsArray = [
  {
    cardTitle: 'Wood Mallet',
    image: images['Wood_Mallet.png'].default,
    alt: 'wood mallet',
    text: 'The solid head packs a punch',
    price: 60,
  },
  {
    cardTitle: 'Slingshot',
    image: images['Slingshot.png'].default,
    alt: 'slingshot',
    text: 'Requires stones for ammo.',
    price: 60,
  },
  {
    cardTitle: 'Wooden Blade',
    image: images['Wooden_Blade.png'].default,
    alt: 'wooden blade',
    text: 'Not bad for a piece of carved wood.',
    price: 60,
  },
];

export default toolsArray;
