import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import { Modal, Alert, Input, AttachmentInput, DateTimeInput, Submit, Select } from '../../tools';
import { getConfig } from '../../../config/omg';


class AddModal extends Component {
  constructor(props) {
    super(props);
    const discoverTypes = getConfig('discoverTypes');
    const popTypes = getConfig('popTypes');
    this.state = {
      discoverTypes,
      popTypes,
    };
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
    const fileds = [];
    switch (this.props.type) {
      case 'discover':
        fileds.push(<Select key="discover_tag" labelName="tag" name="type" defaultValue={this.props.item.type} options={this.state.discoverTypes} />);
        break;
      case 'pop':
        fileds.push(<Select key="pop_type" labelName="跳转类型" name="type" defaultValue={this.props.item.type} options={this.state.popTypes} />);
      default:
    }
    return (
      <Modal title="添加banner">
        <form method="post" onSubmit={this.props.submit}>
          <Alert msg={this.props.errorMsg} />
          <input type="hidden" name="id" value={this.props.item.id} />
          <input type="hidden" name="position" value={this.props.item.position || this.props.type} />
          {fileds}
          <AttachmentInput labelName="banner图片" position={`banner_${this.props.item.position}`} name="img_path" defaultValue={this.props.item.img_path} />
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