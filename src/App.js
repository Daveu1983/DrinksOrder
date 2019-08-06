import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    orders:[
      {userName:"Dave", order:"beer"},
      {userName:"Kellie", order:"wine"},
      {userName:"Neville", order:"Amerertto and coke"}
    ]
  }
  render() {
    return (
      <div className="App">
        {
          this.state.orders.map((element, index)=>{
            return <div><p key={index}><b>name: </b>{element.userName} <b>drink: </b>{element.order}</p></div>
          })
        }
      </div>
    );
  }
}

export default App;
