import React from "react";
import { USCurrencyFormat } from "./currencyFormat.js";

export default class CartTotal extends React.Component {
  render() {
    const selectedFeatures = this.props.selectedFeatures;
    const featureKeys = Object.keys(selectedFeatures);

    const cartTotal = featureKeys.reduce((total, feature) => {
      return total + selectedFeatures[feature].cost;
    }, 0);

    return (
      <div className="summary__total">
        <div className="summary__total__label">Total</div>
        <div className="summary__total__value">
          {USCurrencyFormat.format(cartTotal)}
        </div>
      </div>
    );
  }
}
