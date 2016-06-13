import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';

class RedEnvelope extends Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    return (
      <div>a</div>
    );
  }
  
}

export default connect()(RedEnvelope);