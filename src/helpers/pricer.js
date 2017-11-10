import getRandomArbitrary from './randomizer';

export default function pluckPrice(items) {
  let prices = [];
  items.map((item) => {
    prices.push(getRandomArbitrary(3, 99));
  })
  return prices
}