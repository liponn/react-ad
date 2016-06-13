import React, { PropTypes, Component } from 'react';

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
