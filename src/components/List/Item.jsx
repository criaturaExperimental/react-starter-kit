import React from 'react';

const babbling = [
  'Master', 'Comprehend', 'Grasp',
  'Understand', 'Expert', 'Get the knack of',
  'Learn'
]

const endBabbling = [
  'in a week', 'in 24 hours', 'in a lifetime', 'in minutes', 'in less than you think'
]

function getRandomArbitrary(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

function pluckTitle() {
  return {
    'first': babbling[getRandomArbitrary(0, babbling.length)],
    'second': endBabbling[getRandomArbitrary(0, endBabbling.length)]
  }
}

export default function Item(props) {
  return (
    <li>{
      `${pluckTitle().first}
      ${props.item} breeding ${pluckTitle().second}`
    }</li>
  )
}