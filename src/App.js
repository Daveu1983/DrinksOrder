import React, { Component } from 'react';
import {connect} from 'react-redux';
import './App.css';
import ShowOrder from "./components/ShowOrder"
import EditOrder from "./components/EditOrder"


class App extends Component {

  modifyOrder = (orderId) =>{
    if (this.props.orders.orderInEditing === true) {
      alert("An order is already in editing, please try again later")
    } else {
      this.props.setOrderInEditing(orderId)
    }
  }

  saveChange = () =>{
    this.props.setSaveChanges()
    this.props.resetEditing()
  }

  cancelChange = () =>{
    this.props.stopEditing()
  }

  render() {
    return (
      <div className="App">
        {
          this.props.orders.orders.map((element, index)=>{
            if (this.props.orders.orderInEditing) {
              if (this.props.orders.orderIdInEditing === element.orderId) {
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
      <div>
        <p>{this.props.orders.userName} {this.props.orders.order}</p>
      </div>
      </div>

    );
  }
}

const mapStateToProps = (state) =>{
  return {
    orders:state.orderReducer
  }
}

const mapDispatchToProps = (dispatch)=>{
  return{
    setOrder: (order, name) =>{
      dispatch({
        type:"CHANGEORDER",
        payload:{
          order:order,
          userName:name
        }
      })
    },
    setOrderInEditing:(orderId) =>{
      dispatch({
        type:"EDITMODE",
        payload:{
          orderId:orderId
        }
      })
    },
    stopEditing:() =>{
      dispatch({
        type:"STOPEDITING"
      })
    },
    setSaveChanges:() =>{
      dispatch({
        type:"SAVE_CHANGES",
      })
    },
    resetEditing:() =>{
      dispatch({
        type:"RESET_EDITING"
      })
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps) (App);

