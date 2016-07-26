import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import { Input, DateTimeInput, Select, Submit, Alert } from '../../tools';
import { getConfig } from '../../../config/omg';
import { commonFetch } from '../../../actions/omg';
import { hideModal } from '../../../actions/modal';
import history from '../../../core/history';
import { ACTIVITY_ADD, ACTIVITY_GROUP_LIST } from '../../../constants';

class ActivityAdd extends Component {
  constructor(props) {
    super(props);
    this.saveActivity = this.saveActivity.bind(this);
    const activityTriggers = getConfig('activityTriggers');
    const frequencyTypes = getConfig('frequencyTypes');
    const sendAwardTypes = getConfig('sendAwardTypes');
    this.state = {
      activityTriggers,
      frequencyTypes,
      sendAwardTypes,
    };
  }
  saveActivity(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    this.props.dispatch(commonFetch(ACTIVITY_ADD, 'POST', formData))
      .then((json) => {
        if (json.error_code === 0) {
          this.props.dispatch(hideModal());
          history.push(`/activity/id/${json.data.insert_id}`);
        }
      });
  }
  render() {
    return (
      <form method="post" onSubmit={this.saveActivity}>
        <Alert msg={this.props.errorMsg} />
        <input name="group_id" type="hidden" value={this.props.groupId} className="form-control" />
        <Input required labelName="活动名称" name="name" />
        <Input labelName="英文别名" name="alias_name" />
        <DateTimeInput required limit labelName="开始时间" name="start_at" />
        <DateTimeInput required limit labelName="结束时间" name="end_at" />
        <Select labelName="触发条件" name="trigger_type" options={this.state.activityTriggers} />
        <Select labelName="频次限制" name="frequency" options={this.state.frequencyTypes} />
        <Select labelName="发奖规则" name="award_rule" options={this.state.sendAwardTypes} />
        <input type="hidden" name="trigger_index" value="1" />
        <div className="form-group row">
          <label className="col-sm-4 text-xs-right">说明:</label>
          <div className="col-sm-6">
            <textarea name="des" className="form-control"></textarea>
          </div>
        </div>
        <Submit />
      </form>
    );
  }
}

ActivityAdd.propTypes = {
  dispatch: PropTypes.func.isRequired,
  groupId: PropTypes.number.isRequired,
  errorMsg: PropTypes.string,
}

ActivityAdd.defaultProps = {
  errorMsg: '',
}

export default connect( state => {
  const { omg } = state
  const errorMsg = omg.errorMsg[ACTIVITY_ADD] || '';
  return {
    errorMsg,
  };
})(ActivityAdd);
