import React from 'react';
import CartItem from './CartItem';
import CartTotal from './CartTotal';

export default class Cart extends React.Component {

/*
    const summary = Object.keys(this.state.selected).map((feature, idx) => {
      const featureHash = feature + '-' + idx;
      const selectedOption = this.state.selected[feature];

      return (
        <div className="summary__option" key={featureHash}>
          <div className="summary__option__label">{feature} </div>
          <div className="summary__option__value">{selectedOption.name}</div>
          <div className="summary__option__cost">
            {USCurrencyFormat.format(selectedOption.cost)}
          </div>
        </div>
      );
    });
*/ 
/*
  summary = Object.keys(this.props.selected).map((feature, idx) => {
    const featureHash = feature + '-' + idx;
    const selectedOption = this.props.selected[feature];

    return (
      <div className="summary__option" key={featureHash}>
        <div className="summary__option__label">{feature} </div>
        <div className="summary__option__value">{selectedOption.name}</div>
        <div className="summary__option__cost">
          {this.props.currencyFormat.format(selectedOption.cost)}
        </div>
      </div>
    );
  });
*/
/*
  total = Object.keys(this.props.selected).reduce(
    (acc, curr) => acc + this.props.selected[curr].cost,
    0
  );
*/
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