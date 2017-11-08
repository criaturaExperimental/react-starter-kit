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
      <h1>I'm working</h1>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'));


// export default function App() {
//   return (
//     <main>
//       <Header />
//       <List />
//       <CheckoutBasket />
//     </main>
//   )
// }