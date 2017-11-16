import React from 'react';

import Item from 'List/Item.jsx';
import { StyledList } from "../../sytledComponents/list";

export default function List(props) {

    return (
      <StyledList>
        {props.list.map((item, i) =>
          <Item
            key = { item }
            item = { item }
            price = { props.prices[i] }
            onClick = { props.onClick }
          />
        )}
      </StyledList>
    );
}