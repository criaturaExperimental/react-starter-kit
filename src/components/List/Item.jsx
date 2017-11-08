import React from 'react';
import CourseCard from 'CourseCard/CourseCard.jsx';

function handleclick(id){
  console.log(id);
}

export default function Item(props) {
  return (
    <CourseCard
    item = {props.item}
    price = {props.price}
    onClick = {() => handleclick(props)}
    />
  )
}