import React from 'react';

// Normalizes string as a slug - a string that is safe to use
// in both URLs and html attributes
import slugify from 'slugify';

export default class CustomizerForm extends React.Component {

//for each feature (key) in  this.props.features
//  create a customizationItemGroup

//features = Object.keys(this.props.features);
features = Object.keys(this.props.features).map((feature, idx) => {  
      const featureHash = feature + '-' + idx;
      const options = this.props.features[feature].map(item => {
        const itemHash = slugify(JSON.stringify(item));
        return (
          <div key={itemHash} className="feature__item">                       
            <input
              type="radio"
              id={itemHash}
              className="feature__option"
              name={slugify(feature)}
              checked={item.name === this.props.selected[feature].name}
              onChange={e => this.props.handleOptionChange(feature, item)}
            />
            <label htmlFor={itemHash} className="feature__label">
              {item.name} ({this.props.currencyFormat.format(item.cost)})
            </label>
          </div>
        );
      });

      return (                                                        
        <fieldset className="feature" key={featureHash}>
          <legend className="feature__name">
            <h3>{feature}</h3>
          </legend>
          {options}
        </fieldset>
      );
    });

  render() {
    return (
      <form className="main__form">
        <h2>Customize your laptop</h2>
        {this.features}
      </form>
    )
  }
}