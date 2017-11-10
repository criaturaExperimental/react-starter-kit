import React from 'react';

import Item from 'List/Item.jsx';

export default function List(props) {

    return (
      <ul>
      {props.list.map((item, i) =>
        <Item
          key = { item }
          item = { item }
          price = { props.prices[i] }
          onClick = { props.onClick }
        />
      )}
      </ul>
    );
}