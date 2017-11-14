import React from 'react';
import pluckTitle from '../../helpers/babbler';
import capitalizer from '../../helpers/capitalizer';

export default function CourseCard(props) {
  return(
    <li>
      <h4>
        {`${pluckTitle().first} ${capitalizer(props.item)} breeding ${pluckTitle().second}`}
      </h4>
      <div className="course-payment">
        <span>${ props.price }</span>
        <button value={ props.price } onClick={ ()=> props.onClick({price: props.price, title: props.item}) }>Buy</button>
      </div>
    </li>
  )
}