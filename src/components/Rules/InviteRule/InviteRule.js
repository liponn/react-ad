import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import { Submit, Checkbox } from '../../tools';


class InviteRule extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    console.dir(this.props.activityId);
    return (
      <form onSubmit={this.props.submit}>
        <input type="hidden" name="activity_id" value={this.props.activityId} />
        <Checkbox labelName="是否被邀请" name="is_invite" />
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