import React from "react";
import { USCurrencyFormat } from "./currencyFormat";

// Normalizes string as a slug - a string that is safe to use
// in both URLs and html attributes
import slugify from "slugify";

export default class CustomizerItem extends React.Component {
  render() {
    return (
      <div className="feature__item">
        <input
          type="radio"
          id={this.props.id}
          className="feature__option"
          name={slugify(this.props.feature)}
          checked={
            this.props.item.name ===
            this.props.selected[this.props.feature].name
          }
          onChange={(e) =>
            this.props.handleChangedOption(this.props.feature, this.props.item)
          }
        />
        <label htmlFor={this.props.id} className="feature__label">
          {this.props.item.name} (
          {USCurrencyFormat.format(this.props.item.cost)})
        </label>
      </div>
    );
  }
}
