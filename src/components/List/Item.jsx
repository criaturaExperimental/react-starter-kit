import React from 'react';
import CourseCard from 'CourseCard/CourseCard.jsx';

function handleclick(id){
  alert(id);
}

export default function Item(props) {
  return (
    <CourseCard
    item={props.item}
    onClick={() => handleclick(props.item)}
    />
  )
}