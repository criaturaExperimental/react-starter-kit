import React from 'react';
import capitalizer from '../../helpers/capitalizer';

export default function CheckoutList(props) {
  return (
    <ul>
      {  props.courses.map((item, i) =>
        <li className="fadeIn" key={`${item.title} ${i}`}>
          { `${capitalizer(item.title)}: ${item.price}` }
          <button>X</button>
        </li>
      )}
    </ul>
  )
}