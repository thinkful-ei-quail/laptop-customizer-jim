import React from 'react';
import CartTotal from './CartTotal';

export default class Cart extends React.Component {

  render() {
    return (
      <>
        <h2>Your cart</h2>
        {this.props.items}
        <CartTotal total={this.props.total}/>      
      </>
    );
  }
}