import React, { PropTypes, Component } from 'react';

class Modal extends Component {
  constructor(props) {
    super(props)
  }  
  render() {
    return (
      <div className={this.props.className ? `modal-dialog ${this.props.className}` : `modal-dialog`}>
        <div className="modal-content">
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
          <div className="modal-body">
            {this.props.children}
          </div>
        </div>
      </div>
    );
  }
}

Modal.propTypes = {
  className: PropTypes.string
}

export default Modal;
