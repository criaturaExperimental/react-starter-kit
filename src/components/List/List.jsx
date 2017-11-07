import React from 'react';
import listApi from '../../data/list.json';
import getList from '../../services/getList';

export default function List() {

    return (
      <ul>
        {getList(listApi).map(function(item, i){
          return <li key={i}> {item} </li> // should be another component to which i pass the element
        })}
      </ul>
    );
}