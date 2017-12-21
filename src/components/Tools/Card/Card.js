import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Card extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="card clearfix">
        <div className="card-header">{this.props.title}{this.props.btn}</div>
        {this.props.children}
      </div>

    );
  }
}

Card.propTypes = {
  title: PropTypes.string.isRequired,
}

Card.defaultProps = {
  title: '',
  btn: false,
}

export default Card;