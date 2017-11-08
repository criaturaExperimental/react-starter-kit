import React from 'react';
import ReactDOM from 'react-dom';

import List from 'List/List.jsx';
import Header from 'Header.jsx';
import CheckoutBasket from 'CheckoutBasket.jsx'

export default function App() {
  return (
    <main>
      <Header />
      <List />
      <CheckoutBasket />
    </main>
  )
}