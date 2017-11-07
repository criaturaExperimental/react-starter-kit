import React from 'react';
import listApi from '../data/list.json'


function getList(data) {
  let arrData = [];
  const myList = listApi.message;
  for (var key in myList) {
    if (myList.hasOwnProperty(key)) {
      arrData.push(key);
    }
  }
  return arrData
}

export default function App() {

    return (
      <ul>
        {getList(listApi).map(function(item, i){
          return <li key={i}> {item} </li>
        })}
      </ul>
    );
}