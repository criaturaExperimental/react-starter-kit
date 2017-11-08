import React from 'react';
import pluckTitle from '../../helpers/babbler';

export default function Item(props) {
  return (
    <li>{
      `${pluckTitle().first}
      ${props.item} breeding ${pluckTitle().second}`
    }</li>
  )
}