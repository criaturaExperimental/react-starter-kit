import React from 'react';
import listApi from '../../data/list.json';
import getList from '../../services/getList';

import Item from 'List/Item.jsx';

export default function List() {

    return (
      <ul>
        {getList(listApi).map(function(item, i){
          return <Item key={i} item={item}/>
        })}
      </ul>
    );
}