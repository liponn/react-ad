import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Status extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const status = this.props.status;
    let className = 'text-warning';
    let des = '下线';
    if (status) {
      className = 'text-success';
      des = '上线';
    }
    return (
      <span className={className}>{des}</span>
    );
  }
}

Status.propTypes = {
  status: PropTypes.number.isRequired,
}

export default Status;
