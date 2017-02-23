import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import { Submit, Input } from '../../tools';


class PaymentDate extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <form onSubmit={this.props.submit}>
        <input type="hidden" name="activity_id" value={this.props.activityId} />
        <Input type="number" name="min_paymentdate" labelName="项目天数 >=" />
        <Input type="number" name="max_paymentdate" labelName="项目天数 <" />
        <Submit />
      </form>
    );
  }
}

PaymentDate.propTypes = {
  dispatch: PropTypes.func.isRequired,
  activityId: PropTypes.number.isRequired,
  submit: PropTypes.func.isRequired,
}

export default connect()(PaymentDate);
