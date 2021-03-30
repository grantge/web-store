// function that get us food images
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

// Data
const foodArray = [
  {
    cardTitle: 'Omelet',
    image: images['Omelet.png'].default,
    alt: 'omelet',
    text: "It's super fluffy.",
    price: 60,
  },
  {
    cardTitle: 'Sal Dinner',
    image: images['Salmon_Dinner.png'].default,
    alt: 'salmon',
    text: 'The lemon spritz makes it special.',
    price: 60,
  },
  {
    cardTitle: 'Salad',
    image: images['Salad.png'].default,
    alt: 'salad',
    text: 'A healthy garden salad.',
    price: 60,
  },
  {
    cardTitle: 'Pizza',
    image: images['Pizza.png'].default,
    alt: 'pizza',
    text: "It's popular for all the right reasons.",
    price: 60,
  },
  {
    cardTitle: 'Spaghetti',
    image: images['Spaghetti.png'].default,
    alt: 'spaghetti',
    text: 'An old favorite. From Italian kitchen',
    price: 60,
  },
  {
    cardTitle: 'Breakfast',
    image: images['Complete_Breakfast.png'].default,
    alt: 'breakfast',
    text: "You'll feel ready to take on the world!",
    price: 60,
  },
  {
    cardTitle: 'Pancakes',
    image: images['Pancakes.png'].default,
    alt: 'pancakes',
    text: 'A double stack of fluffy, soft pancakes.',
    price: 60,
  },
  {
    cardTitle: 'Ice Cream',
    image: images['Ice_Cream.png'].default,
    alt: 'ice cream',
    text: "It's hard to find someone who doesn't like this",
    price: 60,
  },
  {
    cardTitle: 'Burger',
    image: images['Burger.png'].default,
    alt: 'burger',
    text: 'A convenient snack for the explorer.',
    price: 60,
  },
];

export default foodArray;
