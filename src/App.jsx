import React from 'react';
import ReactDOM from 'react-dom';

// require('./styles/style.scss');
import { injectGlobal } from 'styled-components';

import List from 'List/List.jsx';
import Header from 'Header.jsx';
import CheckoutBasket from 'CheckoutBasket/CheckoutBasket.jsx';

import listApi from './data/list.json';
import getList from './services/getList';
import pricePlucker from './helpers/pricer';
import applyTitle from './helpers/titler';

let list = getList(listApi);
list = applyTitle(list);

class App extends React.Component {

  constructor(props){
    super(props);
    this.state = {
        list: list,
        prices: pricePlucker(list),
        selectedCourses: [],
        totalPrice: 0
    }
  }

   addCourse(courseData){
    let checkoutCourses = this.state.selectedCourses;
    checkoutCourses.push(courseData);
    let newPrice = this.state.totalPrice;
    newPrice += courseData.price;
    this.setState({
      selectedCourses: checkoutCourses,
      totalPrice: newPrice
    })
   }

   removeCourse(courseData){
     alert('yeah1');
   }

  render(){
    return (
      <main>
        <Header />
        <List
          list = { this.state.list }
          prices = { this.state.prices }
          onClick = { (data) => this.addCourse( data ) }
        />
        <CheckoutBasket
          courses={this.state.selectedCourses}
          totalPrice={this.state.totalPrice}
          onClick = { (data) => this.removeCourse( data ) }
        />
      </main>
    )
  }
}

// GLOBAL STYLES
injectGlobal`
  body {
    background-color: ghostwhite;
    font-family: cursive;
  }
`

ReactDOM.render(<App />, document.getElementById('root'));