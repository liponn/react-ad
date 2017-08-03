import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import { Input, DateTimeInput, Select, Submit, Alert, Modal } from '../../tools';
import { getConfig } from '../../../config/omg';
import { BBS_TASK_DT_ADD } from '../../../constants';
import { commonFetch, fetchAction } from '../../../actions/omg';

class TaskAddModal extends Component {
  constructor(props) {
    super(props);
    const frequencyTypes = getConfig('frequencyTypes');
    const awardTypes = getConfig('awardTypes');
    this.state = {
      frequencyTypes,
        awardTypes,
    };
  }



  render() {
    const item = this.props.item || {};
    const types = this.props.types || {};
    return (
      <Modal title={this.props.update ? '编辑子任务' : '添加子任务'}>
        <form method="post" onSubmit={this.props.submit}>
          <Alert msg={this.props.errorMsg} />
          <input type="hidden" name="id" value={item.id} />
          <input type="hidden" name="task_mark" value={this.props.aliasName}/>
          <input name="group_id" type="hidden" value={item.group_id || this.props.groupId} className="form-control" />
          <Input required labelName="任务名称" name="name" defaultValue={item.name} />
          <Select labelName="触发类型" name="trigger_type" options={types} defaultValue={item.trigger_type} />
          <Input  name="number" labelName="触发条件" defaultValue={item.number}/>
          <Select labelName="奖品类型" name="award_type" options={this.state.awardTypes} defaultValue={item.award_type} />
          <Input labelName="奖品数量" name="award" placeholder="奖品数量" defaultValue={item.award} />
          <Select labelName="发奖频次" name="frequency" options={this.state.frequencyTypes} defaultValue={item.frequency} />
          <Input labelName="奖品有效期" name="exp_day" placeholder="奖品有效期(天)" defaultValue={item.exp_day} />
          <Submit />
        </form>
      </Modal>
    );
  }
}

TaskAddModal.propTypes = {
  dispatch: PropTypes.func.isRequired,
  groupId: PropTypes.number,
  submit: PropTypes.func.isRequired,
  errorMsg: PropTypes.string,
  update: PropTypes.bool,
  aliasName:PropTypes.string.isRequired,
}

TaskAddModal.defaultProps = {
  errorMsg: '',
}

export default connect( state => {
  const { omg } = state;
  const errorMsg = omg.errorMsg[BBS_TASK_DT_ADD] || '';
  return {
    errorMsg,
  };
})(TaskAddModal);
