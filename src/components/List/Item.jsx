import React from 'react';
import CourseCard from 'CourseCard/CourseCard.jsx';


export default function Item(props) {
  return (
    <CourseCard
      item = {props.item}
      price = {props.price}
      onClick = {props.onClick}
    />
  )
}