import React, { Component } from 'react';

class ShowOrder extends Component {

    modifyOrderClicked = () => {
        this.props.modifyOrderFunction(this.props.orderId);
    }

render() {
    return (
        <div>
          <p><b>name: </b>{this.props.userName} <b>drink: </b>{this.props.order}</p>
          <button type="button"onClick={this.modifyOrderClicked}>change order</button>
        </div> 
       
        )
    }   
}
export default ShowOrder;