import React from 'react';
import ReactDOM from 'react-dom';

require('./styles/style.scss');

import List from 'List/List.jsx';
import Header from 'Header.jsx';
import CheckoutBasket from 'CheckoutBasket/CheckoutBasket.jsx';

import listApi from './data/list.json';
import getList from './services/getList';
import pricePlucker from './helpers/pricer';
import listProcessed from './helpers/listProcessed';

const list = getList(listApi);

class App extends React.Component {

  constructor(props){
    super(props);
    this.state = {
        list: null,
        prices: null,
        selectedCourses: [],
        totalPrice: 0
    }
  }

  componentWillMount(){
    this.setState({
      list: listProcessed(listApi),
      prices: pricePlucker(list)
    })
  }

   handleClick(courseData){
    console.log(this.state.selectedCourses);
    let nextCourse = this.state.selectedCourses;
    nextCourse.push(courseData);
    let newPrice = this.state.totalPrice;
    newPrice += courseData.price
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