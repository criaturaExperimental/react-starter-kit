import React from 'react';
import capitalizer from '../../helpers/capitalizer';

import { CSSTransitionGroup } from 'react-transition-group';

export default function CheckoutList(props) {
  return (
    <ul>
      <CSSTransitionGroup
      transitionName="animate"
      transitionEnterTimeout={1000}
      transitionLeaveTimeout={500}>
        {  props.courses.map((item, i) =>
            <li key={`${item.title} ${i}`}>
              { `${capitalizer(item.title)}: ${item.price}` }
              <button onClick = { () => props.onClick(item.price, item.title) } >X</button>
            </li>
          )}
      </CSSTransitionGroup>
    </ul>
  )
}