import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Submit, Input, Select } from '../../tools';
import { getConfig } from '../../../config/omg';

class RechargeRule extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <form onSubmit={this.props.submit}>
        <input name="activity_id" type="hidden" value={this.props.activityId} />
        <Input required limit labelName="最小金额" name="min_recharge" defaultValue="0" />
        <Input required limit labelName="最大金额" name="max_recharge" defaultValue="99999999" />
        <Select labelName="是否首充" options={getConfig('rechargeTypes')} name="isfirst" />
        <Submit />
      </form>
    );
  }
}

RechargeRule.propTypes = {
  dispatch: PropTypes.func.isRequired,
  activityId: PropTypes.number.isRequired,
  submit: PropTypes.func.isRequired,
}

export default connect()(RechargeRule);