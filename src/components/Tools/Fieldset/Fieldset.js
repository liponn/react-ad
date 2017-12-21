import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Filedset extends Component {
  constructor(props) {
    super(props);
  }
  render() {

    return (
      <div style={{ backgroundColor: '#f7f7f7' }}>
        {this.props.children}
      </div>
    );
  }
}

export default Filedset;