import React from 'react';
import {Provider} from 'react-redux'
import {createStore} from 'redux';
import {combineReducers} from 'redux';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const initialState = {
    orders:[
        {userName:"Dave", order:"beer", orderId:1, inEditing:false},
        {userName:"Kellie", order:"wine", orderId:2, inEditing:false},
        {userName:"Neville", order:"Amerertto and coke", orderId:3, inEditing:false}
      ],  
      orderInEditing:false,
      orderIdInEditing:0,
      orderBeingEdited:"",
      userNameBeingEdited:""
  }
  
  
const orderReducer = (state = initialState, action) => {
    switch (action.type){
      case "CHANGEORDER":
        state = {
          ...state,
          order: action.payload.order,
          userName:action.payload.userName
        }
        return state;
      case "EDITMODE":
        state = {
            ...state,
            orderInEditing:true,
            orderIdInEditing:action.payload.orderId,
            userNameBeingEdited:action.payload.userName,
            orderBeingEdited:action.payload.order
        }  
        return state;
      case "STOPEDITING":
        state = {
            ...state,
            orderInEditing:false,
            orderIdInEditing:0
        }  
        return state;
      case "SAVE_USERNAME_CHANGE":
        state = {
            ...state,
            userNameBeingEdited:action.payload.userName
        }  
        return state;
        case "SAVE_ORDER_CHANGE":
          state = {
            ...state,
            orderBeingEdited:action.payload.order
        }  
        return state;
        case "SAVE_CHANGES":
          return {
            ...state,
            orders:state.orders.map((element)=>{
            if(state.orderIdInEditing === element.orderId){
              return{
              ...element,
              userName: state.userNameBeingEdited,
              order: state.orderBeingEdited
              }
            }
            return element;
          })
        }
        case"RESET_EDITING":
        state ={
          ...state,
          orderInEditing:false,
          orderIdInEditing:0,
          userNameBeingEdited:"",
          orderBeingEdited:""
        }
        return state;    
      default:
        return state;
    }
  
  }
  
const store = createStore(combineReducers({orderReducer}),
window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
  
ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();




