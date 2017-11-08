import React from 'react';
import ReactDOM from 'react-dom';

require('./styles/style.scss');

import List from 'List/List.jsx';
import Header from 'Header.jsx';
import CheckoutBasket from 'CheckoutBasket.jsx';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      courses: Array(0),
    }
  }

  render(){
    return (
      <main>
        <Header />
        <List />
        <CheckoutBasket />
      </main>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'));