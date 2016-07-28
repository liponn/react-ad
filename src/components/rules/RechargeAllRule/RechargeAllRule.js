import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import { Submit, Input, DateTimeInput } from '../../tools';

class RechargeAllRule extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <form onSubmit={this.props.submit}>
        <input type="hidden" name="activity_id" value={this.props.activityId} />
        <Input type="number" name="min_recharge_all" labelName="最小充值额" />
        <Input type="number" name="max_recharge_all" labelName="最大充值额" />
        <DateTimeInput required labelName="起始时间" name="start_time" />
        <DateTimeInput required labelName="结束时间" name="end_time" />
        <Submit />
      </form>
    );
  }
}

RechargeAllRule.propTypes = {
  dispatch: PropTypes.func.isRequired,
  activityId: PropTypes.number.isRequired,
  submit: PropTypes.func.isRequired,
}

export default connect()(RechargeAllRule);