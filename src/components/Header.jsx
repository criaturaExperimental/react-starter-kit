import React from 'react';

export default function App() {
  function helloWorld() {
    return "hello world"
  }


    return (
     <div style={{textAlign: 'center'}}>
        <h1>{ helloWorld() }</h1>
      </div>);
}