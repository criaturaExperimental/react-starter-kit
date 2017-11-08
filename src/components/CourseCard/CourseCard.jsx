import React from 'react';
import pluckTitle from '../../helpers/babbler';
import pluckPrice from '../../helpers/pricer';
import capitalizer from '../../helpers/capitalizer';

export default function CourseCard(props) {
  return(
    <li>
      <h4>
        {`${pluckTitle().first} ${capitalizer(props.item)} breeding ${pluckTitle().second}`}
      </h4>
      <div className="course-payment">
        <span>{ pluckPrice() }</span>
        <button>Buy</button>
      </div>
    </li>
  )
}