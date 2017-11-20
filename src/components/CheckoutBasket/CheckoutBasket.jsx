import React from 'react';
import CheckoutList from 'CheckoutBasket/CheckoutList.jsx';
import { StyledCheckoutBasket } from "../../sytledComponents/checkout";


export default function CheckoutBasket(props) {
  return (
    <StyledCheckoutBasket>
      <span>Courses </span>
      {props.courses.length}
      <CheckoutList
        courses={ props.courses }
        onClick = { props.onClick }
      />
      <span>Total price </span>
      {props.totalPrice}
    </StyledCheckoutBasket>
  )
}