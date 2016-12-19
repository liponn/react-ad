import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import { Modal, Input, Submit, DateTimeInput, Textarea, AttachmentInput, Select } from '../../tools';
import { getConfig } from '../../../config/omg';

class AddModal extends Component {
  constructor (props) {
    super(props);
  }
  render() {
    return (
      <Modal title={this.props.update ? '编辑红包' : '添加红包'}>
        <form onSubmit={this.props.submit}>
          <input type="hidden" name="id" defaultValue={this.props.item.id || ''} />
          <Input labelName="发送者名称" name="user_name" type="text" required defaultValue={this.props.item.user_name || ''} />
          <input type="hidden" name="award_type" value="3" />
          <Input labelName="体验金奖品ID" name="award_id" type="number" placeholder="体验金id,金额为0" required defaultValue={this.props.item.award_id || ''} />
          <Input labelName="总金额" name="total_money" type="number" required defaultValue={this.props.item.total_money || ''} />
          <Input labelName="总数量" name="total_num" type="number" required defaultValue={this.props.item.total_num || ''} />
          <Input labelName="最小值" name="min" type="number" required defaultValue={this.props.item.min || 1} />
          <Input labelName="最大值" name="max" type="number" required defaultValue={this.props.item.max || ''} />
          <DateTimeInput required labelName="开始时间" name="start_time" defaultValue={this.props.item.start_time} />
          <DateTimeInput required labelName="结束时间" name="end_time" defaultValue={this.props.item.end_time} />
          <Textarea labelName="祝福语" name="blessing" defaultValue={this.props.item.blessing || ''} />
          <Submit />
        </form>
      </Modal>
    );
  }
}

AddModal.propTypes = {
  submit: PropTypes.func.isRequired,
  update: PropTypes.bool,
  item: PropTypes.obj,
}

AddModal.defaultProps = {
  item: {},
  update: false,
}

export default connect()(AddModal);