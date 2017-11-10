import React from 'react';
import ReactDOM from 'react-dom';

require('./styles/style.scss');

import List from 'List/List.jsx';
import Header from 'Header.jsx';
import CheckoutBasket from 'CheckoutBasket.jsx';

import listApi from './data/list.json';
import getList from './services/getList';
import pricePlucker from './helpers/pricer';
import listProcessed from './helpers/listProcessed';

const list = getList(listApi);

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
        selectedCourses: [],
    }
  }
   handleClick(price){
    console.log(price);
   }

  render(){
    const list = listProcessed(listApi);
    const prices = pricePlucker(list);

    return (
      <main>
        <Header />
        <List
            list = { list }
            prices = { prices }
            onClick = { (price) => this.handleClick( price ) }
        />
        <CheckoutBasket courses={this.state.selectedCourses}/>
      </main>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'));