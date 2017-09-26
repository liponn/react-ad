import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import { Modal, Alert, Input, AttachmentInput, DateTimeInput, Submit, Select, Textarea } from '../../tools';
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
      case 'channel':
      case 'pc_channel':
        fileds.push(<Input key="share_name" name="name" labelName="渠道名" placeholder="不填则为默认渠道" defaultValue={this.props.item.name} />);
        break;
      case 'discover':
        fileds.push(<Input key="share_name" name="name" labelName="埋点说明" defaultValue={this.props.item.name} />);
        fileds.push(<Select key="discover_tag" labelName="tag" name="type" defaultValue={this.props.item.type} options={this.state.discoverTypes} />);
        break;
      case 'discover_feature':
        fileds.push(<Input key="share_name" name="name" labelName="名称" defaultValue={this.props.item.name} />);
        break;
      case 'pop':
        fileds.push(<Input key="name" name="name" labelName="标题" defaultValue={this.props.item.name} />);
        fileds.push(<Input key="share_name" name="short_desc" labelName="副标题" defaultValue={this.props.item.short_desc} />);
        fileds.push(<Select key="pop_type" labelName="跳转类型" name="type" defaultValue={this.props.item.type} options={this.state.popTypes} />);
        break;
      case 'cast_finish':
        fileds.push(<Input key="share_name" name="name" labelName="埋点说明" defaultValue={this.props.item.name} />);
        fileds.push(<Select key="pop_type" labelName="跳转类型" name="type" defaultValue={this.props.item.type} options={this.state.popTypes} />);
        break;
      case 'share':
        fileds.push(<Input key="tag" name="tag" labelName="tag" defaultValue={this.props.item.tag} />);
      case 'taojin':
        fileds.push(<Input key="share_name" name="name" labelName="标题" defaultValue={this.props.item.name} />);
        fileds.push(<Textarea key="share_desc" name="desc" labelName="内容" defaultValue={this.props.item.desc} />);
        fileds.push(<Input key="share_short_des" name="short_desc" labelName="分享时说明" defaultValue={this.props.item.short_desc} />);
      case 'index_icon':
        fileds.push(<Input key="name" name="name" labelName="名称" defaultValue={this.props.item.name} />);
        fileds.push(<Input key="share_name" name="short_desc" labelName="副标题" defaultValue={this.props.item.short_desc} />);
      default:
        fileds.push(<Input key="share_name" name="name" labelName="埋点说明" defaultValue={this.props.item.name} />);
    }
    return (
      <Modal title="添加">
        <form method="post" onSubmit={this.props.submit}>
          <Alert msg={this.props.errorMsg} />
          <input type="hidden" name="id" value={this.props.item.id} />
          <input type="hidden" name="position" value={this.props.item.position || this.props.type} />
          {fileds}
          <AttachmentInput labelName={this.props.type === 'index_icon' ? "未选中图" : "banner图片" } position={`banner_${this.props.item.position}`} name="img_path" defaultValue={this.props.item.img_path} />
          {this.props.type === 'index_icon' && <AttachmentInput labelName="选中图" position={`banner_${this.props.item.position}`} name="desc" defaultValue={this.props.item.desc} />}

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
