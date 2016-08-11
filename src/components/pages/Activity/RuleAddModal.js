import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';

import { fetchAction } from '../../../actions/omg';
import { hideModal } from '../../../actions/modal';
import { ACTIVITY_RULE_ADD } from '../../../constants';
import { getConfig } from '../../../config/omg';
import { Alert, Modal } from '../../tools';

import ChannelRule from '../../rules/ChannelRule';
import RegisterRule from '../../rules/RegisterRule';
import CastRule from '../../rules/CastRule';
import RechargeRule from '../../rules/RechargeRule';
import InviteRule from '../../rules/InviteRule';
import InviteNumRule from '../../rules/InviteNumRule';
import UserLevelRule from '../../rules/UserLevelRule';
import BalanceRule from '../../rules/BalanceRule';
import PaymentRule from '../../rules/PaymentRule';
import CastAllRule from '../../rules/CastAllRule';
import RechargeAllRule from '../../rules/RechargeAllRule';

class RuleAddModal extends Component {
  constructor(props) {
    super(props);
    this.submit = this.submit.bind(this);
    this.selectRule = this.selectRule.bind(this);
    const ruleTypes = getConfig('ruleTypes');
    this.state = {
      currentRule: 'register',
      ruleTypes,
      errorMsg: '',
    };
  }
  submit(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    this.props.dispatch(fetchAction({
      type: ACTIVITY_RULE_ADD,
      method: 'POST',
      suffix: `/${this.state.currentRule.toLowerCase()}`,
      formData,
    })).then(json => {
      if (json.error_code === 0) {
        this.props.dispatch(hideModal(true));
        this.props.callback();
      } else {
        this.setState({
          errorMsg: json.data.error_msg,
        });
      }
    });
  }
  selectRule(e) {
    const ruleName = e.target.value;
    this.setState({
      errorMsg: '',
      currentRule: ruleName,
    });
  }

  render() {
    const { ruleTypes } = this.state;
    const triggerType = this.props.item.trigger_type;
    const externalRuleTypes = getConfig('triggerRuleFileds', triggerType) || {};

    let ruleView = '';
    switch(this.state.currentRule) {
      case 'channel':
        ruleView = <ChannelRule submit={this.submit} activityId={this.props.item.id} />;
        break;
      case 'register':
        ruleView = <RegisterRule submit={this.submit} activityId={this.props.item.id} />;
        break;
      case 'cast':
        ruleView = <CastRule submit={this.submit} activityId={this.props.item.id} />;
        break;
      case 'recharge':
        ruleView = <RechargeRule submit={this.submit} activityId={this.props.item.id} />;
        break;
      case 'invite':
        ruleView = <InviteRule submit={this.submit} activityId={this.props.item.id} />;
        break;
      case 'invitenum':
        ruleView = <InviteNumRule submit={this.submit} activityId={this.props.item.id} />;
        break;
      case 'userlevel':
        ruleView = <UserLevelRule submit={this.submit} activityId={this.props.item.id} />;
        break;
      case 'balance':
        ruleView = <BalanceRule submit={this.submit} activityId={this.props.item.id} />;
        break;
      case 'payment':
        ruleView = <PaymentRule submit={this.submit} activityId={this.props.item.id} />;
        break;
      case 'castall':
        ruleView = <CastAllRule submit={this.submit} activityId={this.props.item.id} />;
        break;
      case 'rechargeall':
        ruleView = <RechargeAllRule submit={this.submit} activityId={this.props.item.id} />;
        break;
      default:
        ruleView = this.state.currentRule;
    }

    return (
      <Modal title="添加规则">
        <div className="clearfix">

          {Object.keys(ruleTypes).map(key => (
            <div className="pull-left m-r-1">
              <label key={key} className="c-input c-radio">
                <input
                  name="rule-add"
                  checked={key === this.state.currentRule}
                  value={key}
                  type="radio"
                  onChange={this.selectRule}
                />
                <span className="c-indicator"></span>
                {ruleTypes[key]}
              </label>
            </div>
          ))}
          {Object.keys(externalRuleTypes).map(key => (
            <div className="pull-left m-r-1">
              <label key={key} className="c-input c-radio text-info">
                <input
                  name="rule-add"
                  checked={key === this.state.currentRule}
                  value={key}
                  type="radio"
                  onChange={this.selectRule}
                />
                <span className="c-indicator"></span>
                {externalRuleTypes[key]}
              </label>
            </div>
          ))}
        </div>
        <hr />
        <Alert msg={this.state.errorMsg} />
        {ruleView}
      </Modal>
    );
  }
}
RuleAddModal.propTypes = {
  dispatch: PropTypes.func.isRequired,
  activityId: PropTypes.number.isRequired,
  callback: PropTypes.func.isRequired,
}

export default connect()(RuleAddModal);
