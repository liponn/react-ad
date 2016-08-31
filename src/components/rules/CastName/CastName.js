import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import { Submit, Checkbox, Input } from '../../tools';


class CastName extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <form method="post" onSubmit={this.props.submit}>
        <input name="activity_id" type="hidden" value={this.props.activityId} />
        <Input required labelName="标名称" name="name" />
        <Input labelName="期名" name="stage_name" placeholder="不填则不限制" />
        <Submit />
      </form>
    );
  }
}

CastName.propTypes = {
  dispatch: PropTypes.func.isRequired,
  submit: PropTypes.func.isRequired,
  activityId: PropTypes.number.isRequired,
}

export default connect()(CastName);