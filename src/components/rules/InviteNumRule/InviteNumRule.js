import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import { Submit, Input } from '../../tools';


class InviteRule extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <form onSubmit={this.props.submit}>
        <input type="hidden" name="activity_id" value={this.props.activityId} />
        <Input labelName="最小邀请人数" type="number" name="min_invite_num" />
        <Input labelName="最大邀请人数" type="number" name="max_invite_num" />
        <Submit />
      </form>
    );
  }
}

InviteRule.propTypes = {
  dispatch: PropTypes.func.isRequired,
  activityId: PropTypes.number.isRequired,
  submit: PropTypes.func.isRequired,
}

export default connect()(InviteRule);