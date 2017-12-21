import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Submit, Input } from '../../tools';


class ZanNum extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <form onSubmit={this.props.submit}>
        <input type="hidden" name="activity_id" value={this.props.activityId} />
        <Input type="number" name="zan_num" labelName="点赞数量" />
        <Submit />
      </form>
    );
  }
}

ZanNum.propTypes = {
  dispatch: PropTypes.func.isRequired,
  activityId: PropTypes.number.isRequired,
  submit: PropTypes.func.isRequired,
}

export default connect()(ZanNum);