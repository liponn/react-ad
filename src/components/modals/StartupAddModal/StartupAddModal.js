import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import { fetchAction } from '../../../actions/omg';
import { hideModal } from '../../../actions/modal'
import { STARTUP_ADD } from '../../../constants'
import { Modal, Alert, Input, Textarea, Submit, DateTimeInput, AttachmentInput } from '../../tools';

class StartupAddModal extends Component {
  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
    this.state = {
      errorMsg: '',
    };
  }
  onSubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    this.props.dispatch(fetchAction({
      type: STARTUP_ADD,
      method: 'POST',
      formData,
    })).then((json) => {
      if (json.error_code === 0) {
        this.props.dispatch(hideModal(true));
        this.props.callback(this.props.type);
      } else {
        this.setState({
          errorMsg: json.data.error_msg,
        });
      }
    });
  }
  render() {
    return (
      <Modal title="添加启动页">
        <form method="post" ref="addForm" onSubmit={this.onSubmit}>
          <Alert msg={this.state.errorMsg} />
          <input type="hidden" name="platform" value={this.props.type} />
          <Input labelName="启动页名称" name="name" />
          <AttachmentInput labelName="图片1" name="img1" />
          <AttachmentInput labelName="图片2" name="img2" />
          <AttachmentInput labelName="图片3" name="img3" />
          <AttachmentInput labelName="图片4" name="img4" />
          <Input labelName="图片跳转链接" name="target_url" />
          <DateTimeInput labelName="开始时间" name="online_time" />
          <DateTimeInput labelName="结束时间" name="offline_time" />
          <Submit />
        </form>
      </Modal>
    );
  }
}
StartupAddModal.propTypes = {
  dispatch: PropTypes.func.isRequired,
  callback: PropTypes.func.isRequired,
  type: PropTypes.string.isRequired,
}

export default connect(state => ({}))(StartupAddModal);

