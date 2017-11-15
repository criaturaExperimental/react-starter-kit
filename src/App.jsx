import React from 'react';
import ReactDOM from 'react-dom';

require('./styles/style.scss');

import List from 'List/List.jsx';
import Header from 'Header.jsx';
import CheckoutBasket from 'CheckoutBasket/CheckoutBasket.jsx';

import listApi from './data/list.json';
import getList from './services/getList';
import pricePlucker from './helpers/pricer';
import applyTitle from './helpers/titler';

let list = getList(listApi);  /*?*/
list = applyTitle(list)  /*?*/

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

   handleClick(courseData){
    console.log(this.state.selectedCourses);
    let nextCourse = this.state.selectedCourses;
    nextCourse.push(courseData);
    let newPrice = this.state.totalPrice;
    newPrice += courseData.price;
    this.setState({
      selectedCourses: nextCourse,
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
            onClick = { (data) => this.handleClick( data ) }
        />
        <CheckoutBasket courses={this.state.selectedCourses} totalPrice={this.state.totalPrice}/>
      </main>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'));