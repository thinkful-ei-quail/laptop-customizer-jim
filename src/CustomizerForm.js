import React from 'react';

// Normalizes string as a slug - a string that is safe to use
// in both URLs and html attributes
import slugify from 'slugify';


export default class CustomizerForm extends React.Component {

  render() {
    return (
      <form className="main__form">
        <h2>Customize your laptop</h2>
        {this.props.features}
      </form>
    )
  }
}