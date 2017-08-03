import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import { Submit, Input } from '../../tools';


class JoinNum extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <form onSubmit={this.props.submit}>
        <input type="hidden" name="activity_id" value={this.props.activityId} />
        <Input type="number" name="join_max" labelName="参与人数上限" />
        <Submit />
      </form>
    );
  }
}

JoinNum.propTypes = {
  dispatch: PropTypes.func.isRequired,
  activityId: PropTypes.number.isRequired,
  submit: PropTypes.func.isRequired,
}

export default connect()(JoinNum);