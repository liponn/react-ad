import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { hideModal } from '../../../actions/modal';

class Modal extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    $('#modal').on('hidden.bs.modal', () => this.props.dispatch(hideModal(true)));
  }
  componentDidUpdate() {
    if(this.props.showStatus) {
      $('#modal').modal('show');
    }else{
      $('#modal').modal('hide');
    }
  }

  render() {
    const modalView = React.isValidElement(this.props.modalView) ? this.props.modalView : '弹框错误:' + this.props.modalView.toString();
    return (
      <div className="modal fade" id="modal">
        {modalView}
      </div>
    );
  }
}
Modal.propTypes = {
  dispatch: PropTypes.func.isRequired,
  showStatus: PropTypes.bool.isRequired,
  modalView: PropTypes.any.isRequired,
  data: PropTypes.object,
}

Modal.defaultProps = {
  data: {},
}

export default connect(state => {
  const { modal } = state;
  const {
    showStatus,
    modalView,
    data,
  } = modal;
  return {
    showStatus,
    modalView,
    data,
  };
})(Modal);
