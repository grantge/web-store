const arrayItem = Object.keys(localStorage);
const item = arrayItem.map((el) => {
  return <li className="price-name">{el}</li>;
});

let total = '';

const arrayPrice = Object.values(localStorage);
const price = arrayPrice.map((el) => {
  return (
    <li>
      {el}z <button className="btn-remove nes-btn is-warning">X</button>
    </li>
  );
});

if (arrayPrice.length === 0) {
  total = 0;
} else {
  total = arrayPrice.reduce((a, b) => {
    return +a + +b;
  });
}

export { arrayPrice, item, price, total };
