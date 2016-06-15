import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';

import { Modal } from '../../tools';
import { commonFetch } from '../../../actions/omg';
import { hideModal } from '../../../actions/modal';
import Award from '../../pages/Award';
import { ACTIVITY_GROUP_ADD, ACTIVITY_AWARD_ADD } from '../../../constants';

class AwardAddModal extends Component {
  constructor(props) {
    super(props);
    this.addAward = this.addAward.bind(this);
    this.state = {
      currentAward: ' ',
    };
  }

  addAward(e) {
    const target = $(e.target);
    const awardType = target.data('type');
    const id = target.data('id');
    const formDate = new FormData;
    formDate.append('activity_id', this.props.activityId);
    formDate.append('award_type', awardType);
    formDate.append('award_id', id);
    this.props.dispatch(commonFetch(ACTIVITY_AWARD_ADD, 'POST', formDate))
      .then(({ error_code }) => {
        if (error_code === 0) {
          this.props.dispatch(hideModal());
        }
      });
  }

  render() {
    return (
      <Modal title="添加奖品">
        <Award modal addAward={this.addAward} />
      </Modal>
    );
  }
}
AwardAddModal.propTypes = {
  dispatch: PropTypes.func.isRequired,
  activityId: PropTypes.number.isRequired,
}

export default connect(state => {
  const { omg } = state;
  const errorMsg = omg.errorMsg[ACTIVITY_GROUP_ADD] || '';
  return {
    errorMsg,
  };
})(AwardAddModal);
