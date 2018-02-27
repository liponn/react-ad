import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Success extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const msg = this.props.msg;
    let hidden = false;
    if(typeof msg !== 'string' || msg === ''){
      hidden = true;
    }
    return (
      <div hidden={hidden} className="row" role="alert">
        <div className="col-sm-12">
          <div className="alert alert-success">
            {msg}
          </div>
        </div>
      </div>
    );
  }
}

Success.propTypes = {
  msg: PropTypes.string,
}

Success.defaultProps = {
  msg: '',
}

export default Success;