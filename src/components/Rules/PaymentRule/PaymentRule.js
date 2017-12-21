import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Submit, Input } from '../../tools';
import { getConfig } from '../../../config/omg';


class PaymentRule extends Component {
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
        <Input type="number" name="min_payment" labelName="最小回款额" />
        <Input type="number" name="max_payment" labelName="最大回款额" />
        <Submit />
      </form>
    );
  }
}

PaymentRule.propTypes = {
  dispatch: PropTypes.func.isRequired,
  activityId: PropTypes.number.isRequired,
  submit: PropTypes.func.isRequired,
}

export default connect()(PaymentRule);