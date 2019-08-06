import React, { Component } from 'react';
import './App.css';
import ShowOrder from "./components/ShowOrder"
import EditOrder from "./components/EditOrder"


class App extends Component {
  state = {
    orders:[
      {userName:"Dave", order:"beer", orderId:1, inEditing:false},
      {userName:"Kellie", order:"wine", orderId:2, inEditing:false},
      {userName:"Neville", order:"Amerertto and coke", orderId:3, inEditing:false}
    ],  
    orderInEditing:false,
    orderIdInEditing:0
  }
  modifyOrder = (orderId) =>{
    if (this.state.orderInEditing === true) {
      alert("An order is already in editing, please try again later")
    } else {
      this.setState({ orderInEditing: true, orderIdInEditing: orderId })
    }
  }

  saveChange = (newUsername, newOrder, orderId) =>{
    let currentOrders = this.state.orders
    currentOrders.map((element)=>{
      if(orderId === element.orderId){
        element.userName = newUsername
        element.order = newOrder
      }
      return element;
    })
    this.setState({orders:currentOrders,orderInEditing: false, orderIdInEditing:0})
  }

  cancelChange = () =>{
    this.setState({orderInEditing: false, orderIdInEditing:0})
  }

  render() {
    return (
      <div className="App">
        {
          this.state.orders.map((element, index)=>{
            if (this.state.orderInEditing) {
              if (this.state.orderIdInEditing === element.orderId) {
                return <EditOrder key={index} orderId={element.orderId} userName={element.userName} 
                        order={element.order} saveChangeFunction={this.saveChange}
                        cancelChangeFunction={this.cancelChange} /> 
              }
            }else{
                return <ShowOrder  key={index} orderId={element.orderId} userName={element.userName} 
                    order={element.order} modifyOrderFunction={this.modifyOrder}
                    />
              }
          })
        }
      </div>
    );
  }
}

export default App;
