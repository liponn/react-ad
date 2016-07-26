import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';

import ModalHeader from '../../tools/ModalHeader';
import { commonFetch } from '../../../actions/omg';
import { hideModal } from '../../../actions/modal';
import { ACTIVITY_GROUP_ADD, ACTIVITY_GROUP_LIST } from '../../../constants'
import { getConfig } from '../../../config/omg'

import ChannelRule from '../../rules/ChannelRule';
import RegisterRule from '../../rules/RegisterRule';
import CastRule from '../../rules/CastRule';
import RechargeRule from '../../rules/RechargeRule';

class RuleAddModal extends Component {
  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
    this.selectRule = this.selectRule.bind(this);
    const ruleTypes = getConfig('ruleTypes');
    this.state = {
      currentRule: 'register',
      ruleTypes,
    };
  }
  onSubmit(e) {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const { dispatch } = this.props;
    dispatch(commonFetch(ACTIVITY_GROUP_ADD, 'POST', formData))
      .then(({ error_code }) => {
        if (error_code === 0) {
          dispatch(hideModal());
          dispatch(commonFetch(ACTIVITY_GROUP_LIST));
        }
      });
  }
  selectRule(e) {
    const ruleName = e.target.value;
    this.setState({
      currentRule: ruleName,
    });
  }

  render() {
    const { ruleTypes } = this.state;
    let ruleView = '';
    switch(this.state.currentRule) {
      case 'channel':
        ruleView = <ChannelRule activityId={this.props.activityId} callback={this.props.callback} />;
        break;
      case 'register':
        ruleView = <RegisterRule activityId={this.props.activityId} callback={this.props.callback} />;
        break;
      case 'cast':
        ruleView = <CastRule activityId={this.props.activityId} callback={this.props.callback} />;
        break;
      case 'recharge':
        ruleView = <RechargeRule activityId={this.props.activityId} callback={this.props.callback} />;
        break;
      default:
        ruleView = this.state.currentRule;
    }

    return (
      <div className="modal-dialog">
        <div className="modal-content">
          <ModalHeader title="添加规则" />
          <div className="modal-body">
            <div>
              {Object.keys(ruleTypes).map(key => (
                <label key={key} className="c-input c-radio">
                  <input name="rule-add" checked={key === this.state.currentRule} value={key} type="radio" onChange={this.selectRule} />
                  <span className="c-indicator"></span>
                  {ruleTypes[key]}
                </label>
              ))}
              <hr />
              {ruleView}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
RuleAddModal.propTypes = {
  dispatch: PropTypes.func.isRequired,
  activityId: PropTypes.number.isRequired,
  callback: PropTypes.func.isRequired,
}

export default connect(state => {
  const { omg } = state;
  const errorMsg = omg.errorMsg[ACTIVITY_GROUP_ADD] || '';
  return {
    errorMsg,
  };
})(RuleAddModal);
