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
        selectedCourses: Array(0),
        totalPrice: 0
    };
    this.addCourse = this.addCourse.bind(this);
    this.removeCourse = this.removeCourse.bind(this);
  }

   addCourse(courseData){
    let checkoutCourses = this.state.selectedCourses.slice();
    checkoutCourses.push(courseData);
    let newPrice = this.state.totalPrice;
    newPrice += courseData.price;
    this.setState({
      selectedCourses: checkoutCourses,
      totalPrice: newPrice
    })
   }

  // split functionality one for the price another one for the list item
   removeCourse(index, price){
    let checkoutCourses = this.state.selectedCourses.slice();
    checkoutCourses.splice(index, 1);
    let newPrice = this.state.totalPrice;
    newPrice -= price;
    this.setState({
      selectedCourses: checkoutCourses,
      totalPrice: newPrice
    })
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
          onClick = { (index, price) => this.removeCourse( index, price ) }
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