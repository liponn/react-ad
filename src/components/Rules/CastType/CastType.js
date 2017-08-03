import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import { Submit, Checkbox, Input, Select } from '../../tools';
import { getConfig } from '../../../config/omg';

class CastType extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <form method="post" onSubmit={this.props.submit}>
        <input name="activity_id" type="hidden" value={this.props.activityId} />
        <Select labelName="标期限类型" options={getConfig('castDateTypes')} name="type" />
        <Submit />
      </form>
    );
  }
}

CastType.propTypes = {
  dispatch: PropTypes.func.isRequired,
  submit: PropTypes.func.isRequired,
  activityId: PropTypes.number.isRequired,
}

export default connect()(CastType);