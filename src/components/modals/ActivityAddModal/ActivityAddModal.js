import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import { Input, DateTimeInput, Select, Submit, Alert, Modal } from '../../tools';
import { getConfig } from '../../../config/omg';
import { ACTIVITY_ADD } from '../../../constants';

class ActivityAddModal extends Component {
  constructor(props) {
    super(props);
    const activityTriggers = getConfig('activityTriggers');
    const frequencyTypes = getConfig('frequencyTypes');
    const sendAwardTypes = getConfig('sendAwardTypes');
    this.state = {
      activityTriggers,
      frequencyTypes,
      sendAwardTypes,
    };
  }

  render() {
    const item = this.props.item || {};
    return (
      <Modal title={this.props.update ? '编辑活动' : '添加活动'}>
        <form method="post" onSubmit={this.props.submit}>
          <Alert msg={this.props.errorMsg} />
          <input type="hidden" name="id" value={item.id} />
          <input name="group_id" type="hidden" value={item.group_id || this.props.groupId} className="form-control" />
          <Input required labelName="活动名称" name="name" defaultValue={item.name} />
          <Input labelName="英文别名" name="alias_name" placeholder="可为空" defaultValue={item.alias_name} />
          <DateTimeInput required limit labelName="开始时间" name="start_at" defaultValue={item.start_at} />
          <DateTimeInput required limit labelName="结束时间" name="end_at" defaultValue={item.end_at} />
          <Select labelName="触发条件" name="trigger_type" options={this.state.activityTriggers} defaultValue={item.trigger_type} />
          <Select labelName="发奖频次" name="frequency" options={this.state.frequencyTypes} defaultValue={item.frequency} />
          <Select labelName="发奖规则" name="award_rule" options={this.state.sendAwardTypes} defaultValue={item.award_rule} />
          <Input labelName="最大参与人数" name="join_max" placeholder="0为不限制" defaultValue={item.join_max || 0} />
          <input type="hidden" name="trigger_index" value="1" />
          <div className="form-group row">
            <label className="col-sm-4 text-xs-right">说明:</label>
            <div className="col-sm-6">
              <textarea name="des" className="form-control" defaultValue={item.des}></textarea>
            </div>
          </div>
          <Submit />
        </form>
      </Modal>
    );
  }
}

ActivityAddModal.propTypes = {
  dispatch: PropTypes.func.isRequired,
  groupId: PropTypes.number,
  submit: PropTypes.func.isRequired,
  errorMsg: PropTypes.string,
  update: PropTypes.bool,
}

ActivityAddModal.defaultProps = {
  errorMsg: '',
}

export default connect( state => {
  const { omg } = state;
  const errorMsg = omg.errorMsg[ACTIVITY_ADD] || '';
  return {
    errorMsg,
  };
})(ActivityAddModal);
