import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { DateTimeInput, Submit} from '../../tools';


class RegisterRule extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <form onSubmit={this.props.submit}>
        <input name="activity_id" type="hidden" value={this.props.activityId} />
        <DateTimeInput required limit labelName="开始时间" name="min_time" />
        <DateTimeInput required limit labelName="结束时间" name="max_time" />
        <Submit />
      </form>
    );
  }
}

RegisterRule.propTypes = {
  dispatch: PropTypes.func.isRequired,
  activityId: PropTypes.number.isRequired,
  submit: PropTypes.func.isRequired,
}

export default connect()(RegisterRule);