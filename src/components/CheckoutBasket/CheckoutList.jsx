import React from 'react';

export default function CheckoutList(props) {
  return (
    <ul>
      {  props.courses.map((item) =>
        <li>{ `${item.title}: ${item.price}` }</li>
      )}
    </ul>
  )
}