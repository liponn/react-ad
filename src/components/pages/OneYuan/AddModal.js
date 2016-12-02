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
          <Input labelName="商品名" name="name" type="text" required defaultValue={this.props.item.name || ''} />
          <Input labelName="商品数量" name="total_num" type="number" required defaultValue={this.props.item.total_num || ''} />
          <DateTimeInput required labelName="开始时间" name="start_time" defaultValue={this.props.item.start_time} />
          <DateTimeInput required labelName="结束时间" name="end_time" defaultValue={this.props.item.end_time} />
          <AttachmentInput labelName="配图" name="photo" position={`banner_${this.props.item.photo}`} defaultValue={this.props.item.photo} />
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