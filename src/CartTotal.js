import React from 'react';
import {USCurrencyFormat} from './currencyFormat.js';

export default class CartTotal extends React.Component {

  render() {
    return (
      <div className="summary__total">
        <div className="summary__total__label">Total</div>
        <div className="summary__total__value">
          {USCurrencyFormat.format(this.props.total)}
        </div>
      </div>
    );
  }
}