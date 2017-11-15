import React from 'react';
import capitalizer from '../../helpers/capitalizer';

export default function CheckoutList(props) {
  return (
    <ul>
      {  props.courses.map((item) =>
        <li key={item.title}>{ `${capitalizer(item.title)}: ${item.price}` }</li>
      )}
    </ul>
  )
}