// Function that gives us ring images

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

// Data

const ringsArray = [
  {
    id: 1,
    cardTitle: 'Sturdy Ring',
    image: images['Sturdy_Ring.png'].default,
    alt: 'sturdy ring',
    text: 'Cuts the duration of negative status',
    price: 60,
  },
  {
    id: 2,
    cardTitle: 'Ruby Ring',
    image: images['Ruby_Ring.png'].default,
    alt: 'ruby ring',
    text: "Plays a random assortment of music you've heard.",
    price: 80,
  },
  {
    id: 3,
    cardTitle: 'Glow Ring',
    image: images['Glow_Ring.png'].default,
    alt: 'glow ring',
    text: 'its a constant light.',
    price: 30,
  },
];

export default ringsArray;
