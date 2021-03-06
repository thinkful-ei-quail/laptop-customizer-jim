import React from "react";

export default class CustomizerItemGroup extends React.Component {
  render() {
    return (
      <fieldset className="feature">
        <legend className="feature__name">
          <h3>{this.props.feature}</h3>
        </legend>
        {this.props.items}
      </fieldset>
    );
  }
}
