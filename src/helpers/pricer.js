import getRandomArbitrary from './randomizer';

export default function pluckPrice() {
  return `$${getRandomArbitrary(3, 99)}`
}