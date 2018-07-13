import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Modal, Alert, Input, Checkbox, AttachmentInput, DateTimeInput, Submit, Select, Textarea } from '../../tools';
import { getConfig } from '../../../config/omg';


class AddModal extends Component {
  constructor(props) {
    super(props);
  }
  static propTypes = {
    submit: PropTypes.func.isRequired,
    type: PropTypes.string.isRequired,
    errorMsg: PropTypes.string,
    item: PropTypes.object,
  }
  static defaultProps = {
    item: {},
  }
  render() {
    return (
      <Modal title="添加">
        <form method="post" onSubmit={this.props.submit}>
          <Alert msg={this.props.errorMsg} />
          <input type="hidden" name="id" value={this.props.item.id} />
          <input type="hidden" name="position" value={this.props.item.position || this.props.type} />
          <Input key="share_name" name="name" labelName="标题内容" defaultValue={this.props.item.name} />
          <AttachmentInput labelName="图片" position={`banner_${this.props.item.position}`} name="img_path" defaultValue={this.props.item.img_path} />
          <Input labelName="跳转链接" name="url" defaultValue={this.props.item.url} />
          <DateTimeInput labelName="开始时间" name="start" defaultValue={this.props.item.start} />
          <DateTimeInput labelName="结束时间" name="end" defaultValue={this.props.item.end} />
          <Submit />
        </form>
      </Modal>
    );
  }
}
export default connect()(AddModal);
