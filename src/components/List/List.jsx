import React from 'react';

import listApi from '../../data/list.json';
import getList from '../../services/getList';
import pricePlucker from '../../helpers/pricer';

import Item from 'List/Item.jsx';

const list = getList(listApi);

export default function List() {

    return (
      <ul>
        {list.map((item) =>
          <Item
            key = {item}
            item = {item}
            price = {pricePlucker()}
          />
        )}
      </ul>
    );
}