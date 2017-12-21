import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Submit, Checkbox, Input, Select } from '../../tools';
import { getConfig } from '../../../config/omg';


class CastRule extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <form method="post" onSubmit={this.props.submit}>
        <input name="activity_id" type="hidden" value={this.props.activityId} />
        <Input required limit labelName="最小金额" name="min_cast" defaultValue="0" />
        <Input required limit labelName="最大金额" name="max_cast" defaultValue="99999999" />
        <Select labelName="是否首投" options={getConfig('castTypes')} name="isfirst" />
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