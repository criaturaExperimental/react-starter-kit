import React from 'react';

export default function CheckoutBasket(props) {
  return (
    <aside>
      <span>Courses </span>
      {props.courses.length}
    </aside>
  )
}