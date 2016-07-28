import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import { Submit, Select } from '../../tools';
import { getConfig } from '../../../config/omg';


class InviteRule extends Component {
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
        <Select labelName="用户等级" name="user_level" options={this.state.userLevels} />
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