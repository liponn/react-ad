import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';

import { Modal } from '../../tools';
import { commonFetch } from '../../../actions/omg';
import { hideModal } from '../../../actions/modal';
import RedEnvelope from '../../awards/RedEnvelope';
import { ACTIVITY_GROUP_ADD, ACTIVITY_GROUP_LIST } from '../../../constants';

class AwardAddModal extends Component {
  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
    this.selectAward = this.selectAward.bind(this);
    this.state = {
      currentAward: ' ',
    };
  }
  onSubmit(e) {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const { dispatch } = this.props;
    dispatch(commonFetch(ACTIVITY_GROUP_ADD, 'POST', formData))
      .then(code => {
        if (code === 0) {
          dispatch(hideModal());
          dispatch(commonFetch(ACTIVITY_GROUP_LIST))
        }
      });
  }
  selectAward(e) {
    const ruleName = e.target.value;
    switch (ruleName) {
      case 'redEnvelope':
        this.setState({
          currentAward: <RedEnvelope activityId={this.props.activityId} />,
        })
        break;
      default:
        this.setState({
          currentAward: ruleName,
        });
    }
  }

  render() {
    console.log(this.props.activityId);
    return (
      <Modal title="添加奖品">
        <div>
          <label className="c-input c-radio">
            <input name="award-add" value="redEnvelope" type="radio" onClick={this.selectAward} />
            <span className="c-indicator"></span>
            红包
          </label>&nbsp;&nbsp;
          <label className="c-input c-radio">
            <input name="award-add" value="interest" type="radio" onClick={this.selectAward} />
            <span className="c-indicator"></span>
            加息券
          </label>&nbsp;&nbsp;
          <label className="c-input c-radio">
            <input name="award-add" value="experience" type="radio" onClick={this.selectAward} />
            <span className="c-indicator"></span>
            体验金
          </label>&nbsp;&nbsp;
          <label className="c-input c-radio">
            <input name="award-add" value="coupon" type="radio" onClick={this.selectAward} />
            <span className="c-indicator"></span>
            优惠券
          </label>&nbsp;&nbsp;
          <label className="c-input c-radio">
            <input name="award-add" value="entity" type="radio" onClick={this.selectAward} />
            <span className="c-indicator"></span>
            实物
          </label>&nbsp;&nbsp;
          <hr />
          {this.state.currentAward}
        </div>
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
