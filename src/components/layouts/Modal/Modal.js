import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import { hideModal } from '../../../actions/modal';
import { BannerAddModal, ActivityAddModal, RuleAddModal } from '../../modals'


class Modal extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    $('#modal').on('hidden.bs.modal', () => this.props.dispatch(hideModal()));
  }
  componentDidUpdate() {
    this.toggleModal(this.props.showStatus);
  }
  toggleModal(showStatus) {
    if(showStatus) {
      $('#modal').modal('show');
    }else{
      $('#modal').modal('hide');
    }
  }

  render() {
    let modalContent = false;
    console.log(this.props.modalType);
    switch (this.props.modalType) {
      case 'activityAdd':
        modalContent = <ActivityAddModal data={this.props.data} />
        break;
      case 'bannerAdd':
        modalContent = <BannerAddModal data={this.props.data} />
        break;
      case 'ruleAdd':
        modalContent = <RuleAddModal data={this.props.data} />
        break;
      default:
        modalContent = false;
    }
    return (
      <div className="modal fade" id="modal" tabIndex="-1" role="dialog">
        {modalContent}
      </div>
    );
  }
}
Modal.propTypes = {
  dispatch: PropTypes.func.isRequired,
  showStatus: PropTypes.bool.isRequired,
  modalType: PropTypes.string.isRequired,
  data: PropTypes.object,
}

Modal.defaultProps = {
  data: {}
}

export default connect(state => {
  const { modal } = state;
  const {
    showStatus,
    modalType,
    data,
  } = modal;
  return {
    showStatus,
    modalType,
    data,
  };
})(Modal);
