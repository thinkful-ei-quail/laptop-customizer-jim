import React from "react";
import CustomizerItemGroup from "./CustomizerItemGroup";
import CustomizerItem from "./CustomizerItem";
import { FEATURES } from "./features";

// Normalizes string as a slug - a string that is safe to use
// in both URLs and html attributes
import slugify from "slugify";

export default class CustomizerForm extends React.Component {
  render() {
    const features = Object.keys(FEATURES).map((feature, idx) => {
      const featureHash = feature + "-" + idx;
      const options = FEATURES[feature].map((item) => {
        const itemHash = slugify(JSON.stringify(item));
        return (
          <CustomizerItem
            key={itemHash}
            id={itemHash}
            selected={this.props.selectedFeatures}
            feature={feature}
            item={item}
            handleChangedOption={this.props.handleUpdateFeature}
          />
        );
      });

      return (
        <CustomizerItemGroup
          key={featureHash}
          feature={feature}
          items={options}
        />
      );
    });

    return (
      <form className="main__form">
        <h2>Customize your laptop</h2>
        {features}
      </form>
    );
  }
}
