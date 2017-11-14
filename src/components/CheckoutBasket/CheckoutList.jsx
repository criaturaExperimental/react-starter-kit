import React from 'react';

export default function CheckoutList(props) {
  <ul>
    {  props.list.map((item) =>{
      <li>{ item }</li>
    })}
  </ul>

}