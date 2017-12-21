import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ModalHeader extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="modal-header">
        <button
          type="button"
          className="close"
          data-dismiss="modal"
        >
          <span>&times;</span>
        </button>
        <h4 className="modal-title">{this.props.title}</h4>
      </div>
    );
  }
}

ModalHeader.propTypes = {
  title: PropTypes.string.isRequired,
}

export default ModalHeader;
