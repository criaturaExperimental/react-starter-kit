import React from 'react';
import capitalizer from '../../helpers/capitalizer';

import { CSSTransitionGroup } from 'react-transition-group';


// try to get this into the APP.js to set it up
export default function CheckoutList(props) {
  return (
    <ul>
      <CSSTransitionGroup
      transitionName="animate"
      transitionEnterTimeout={500}
      transitionLeaveTimeout={500}>
        { props.courses.map((item, i) => {
            // return <li key={`${item.title} ${i}`}>
            return <li key={item.title}>
              { `${capitalizer(item.title)}: ${item.price}` }
              <button onClick = { () => props.onClick(i, item.price) } >X</button>
            </li>
          })
        }
      </CSSTransitionGroup>
    </ul>
  )
}