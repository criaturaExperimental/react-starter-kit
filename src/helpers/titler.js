import pluckTitle from '../helpers/babbler';
import capitalizer from '../helpers/capitalizer';

export default function titler(arrayMain) {
  let arrayFinal = []
  arrayMain.map((item) => {
    arrayFinal.push(`${pluckTitle().first} ${capitalizer(item)} breeding ${pluckTitle().second}`);
  })
  return arrayFinal;
}