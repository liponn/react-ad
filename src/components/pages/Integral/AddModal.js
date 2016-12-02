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
      <Modal title={this.props.update ? '编辑商品' : '添加商品'}>
        <form onSubmit={this.props.submit}>
          <input type="hidden" name="id" defaultValue={this.props.item.id || ''} />
          <input type="hidden" name="groups" defaultValue={this.props.item.groups || 'default'} />
          <Input labelName="积分值" name="integral" required defaultValue={this.props.item.integral || ''} />
          <Input labelName="商品数量" name="total_quantity" type="number" required defaultValue={this.props.item.total_quantity || ''} />
          <Input labelName="单用户兑换上限" name="user_quantity" type="number" required defaultValue={this.props.item.user_quantity || 0} />
          <Select labelName="奖品类型" name="award_type" options={getConfig('awardTypes')} value={this.props.item.award_type || 1} />
          <Input labelName="奖品ID" name="award_id" type="number" required defaultValue={this.props.item.award_id || ''} />
          <DateTimeInput required labelName="开始时间" name="start_at" defaultValue={this.props.item.start_at} />
          <DateTimeInput required labelName="结束时间" name="end_at" defaultValue={this.props.item.end_at} />
          <AttachmentInput labelName="配图" name="photo"  position={`banner_${this.props.item.photo}`} defaultValue={this.props.item.photo} />
          <AttachmentInput labelName="配图(小)" name="photo_min"  position={`banner_${this.props.item.photo}`} defaultValue={this.props.item.photo_min} />
          <Textarea labelName="商品说明" name="desc" defaultValue={this.props.item.desc || ''} />
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