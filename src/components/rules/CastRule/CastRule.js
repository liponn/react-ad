import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import { Submit, Checkbox, Input } from '../../tools';


class CastRule extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <form method="post" onSubmit={this.props.submit}>
        <input name="activity_id" type="hidden" value={this.props.activityId} />
        <Input required limit labelName="最小金额" name="min_cast" />
        <Input required limit labelName="最大金额" name="max_cast" />
        <Checkbox labelName="首投" name="isfirst" />
        <Submit />
      </form>
    );
  }
}

CastRule.propTypes = {
  dispatch: PropTypes.func.isRequired,
  submit: PropTypes.func.isRequired,
  activityId: PropTypes.number.isRequired,
}

export default connect()(CastRule);