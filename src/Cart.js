import React from "react";
import CartItem from "./CartItem";
import CartTotal from "./CartTotal";

export default class Cart extends React.Component {
  render() {
    const selectedFeatures = this.props.selectedFeatures;
    const featureKeys = Object.keys(selectedFeatures);

    const cartItems = featureKeys.map((feature, idx) => {
      const featureHash = feature + "-" + idx;
      const selectedOption = selectedFeatures[feature];

      return (
        <CartItem
          key={featureHash}
          feature={feature}
          selectedOption={selectedOption}
        />
      );
    });

    return (
      <>
        <h2>Your cart</h2>
        {cartItems}
        <CartTotal selectedFeatures={selectedFeatures} />
      </>
    );
  }
}
