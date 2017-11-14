import React from 'react';
import CheckoutList from 'CheckoutBasket/CheckoutList.jsx';

export default function CheckoutBasket(props) {
  return (
    <aside>
      <span>Courses </span>
      {props.courses.length}
      <CheckoutList courses={ props.courses }/>
      <span>Total price </span>
      {props.totalPrice}
    </aside>
  )
}