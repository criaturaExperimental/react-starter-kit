import React from 'react';
import pluckTitle from '../../helpers/babbler';
import capitalizer from '../../helpers/capitalizer';

import { StyledItemBig } from "../../sytledComponents/list";


export default function CourseCard(props) {
  return(
    <StyledItemBig>
      <h4>
        {props.item}
      </h4>
      <div className="course-payment">
        <span>${ props.price }</span>
        <button value={ props.price } onClick={ ()=> props.onClick({price: props.price, title: props.item}) }>Buy</button>
      </div>
    </StyledItemBig>
  )
}