import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import { Submit, Input } from '../../tools';
import { getConfig } from '../../../config/omg';


class BalanceRule extends Component {
  constructor(props) {
    super(props);
    const userLevels = getConfig('userLevels');
    this.state = {
      userLevels,
    };
  }
  render() {
    return (
      <form onSubmit={this.props.submit}>
        <input type="hidden" name="activity_id" value={this.props.activityId} />
        <Input type="number" name="min_balance" labelName="最小余额" />
        <Input type="number" name="max_balance" labelName="最大余额" />
        <Submit />
      </form>
    );
  }
}

BalanceRule.propTypes = {
  dispatch: PropTypes.func.isRequired,
  activityId: PropTypes.number.isRequired,
  submit: PropTypes.func.isRequired,
}

export default connect()(BalanceRule);