import React, { Component } from 'react';
import {connect} from 'react-redux';

class EditOrder extends Component {

userNameBoxChanged = (event) =>{
    this.props.setUserName(event.target.value)
    }

orderBoxChanged = (event) =>{
    this.props.setOrderBox(event.target.value)
}

saveChangesClicked = () => {
    this.props.saveChangeFunction();
    } 

cancelChangesClicked = () =>{
    this.props.cancelChangeFunction()
}

render() {
    return (
        <div>
            <input onChange={this.userNameBoxChanged} className="form-control" type="text"
                    defaultValue={this.props.userName}/>
            <input onChange={this.orderBoxChanged} className="form-control" type="text"
                    defaultValue={this.props.order}/>
          <button type="button"onClick={this.saveChangesClicked}>save changes</button>
          <button type="button"onClick={this.cancelChangesClicked}>cancel changes</button>
        </div> 
       
        )
    }   
}
const mapStateToProps = (state) =>{
    return {
      orders:state.orderReducer
    }
  }
  
  const mapDispatchToProps = (dispatch)=>{
    return{
      setUserName: (name) =>{
        dispatch({
          type:"SAVE_USERNAME_CHANGE",
          payload:{
            userName:name
          }
        })
      },
      setOrderBox:(order) =>{
        dispatch({
          type:"SAVE_ORDER_CHANGE",
          payload:{
            order:order
          }
        })
      }
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (EditOrder);