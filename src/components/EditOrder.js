import React, { Component } from 'react';

class EditOrder extends Component {
    state = {
        order:this.props.order, userName:this.props.userName, orderId:this.props.orderId
    }


userNameBoxChanged = (event) =>{
    this.setState({userName: event.target.value})
    }

orderBoxChanged = (event) =>{
    this.setState({order: event.target.value})
}


saveChangesClicked = () => {
    this.props.saveChangeFunction(this.state.userName, this.state.order, this.state.orderId);
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
export default EditOrder;