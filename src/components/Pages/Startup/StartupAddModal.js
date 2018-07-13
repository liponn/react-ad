import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Modal, Alert, Input, Submit, DateTimeInput, AttachmentInput } from '../../tools';
import { getConfig } from '../../../config/omg';

class StartupAddModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      errorMsg: '',
    };
  }
  render() {
    const item = this.props.item || {};
    return (
      <Modal title={this.props.update ? '修改启动图' : '添加启动图'}>
        <form method="post" ref="addForm" onSubmit={this.props.submit}>
          <Alert msg={this.state.errorMsg} />
          <input type="hidden" name="platform" value={item.platform || this.props.type} />
          <Input labelName="启动页名称" name="name" defaultValue={item.name} />
          <input type="hidden" name="id" defaultValue={item.id} />
          <AttachmentInput labelName={getConfig('startupImages', `${this.props.type}:1`)} name="img1" defaultValue={item.img1 || ''} />
          <AttachmentInput labelName={getConfig('startupImages', `${this.props.type}:2`)} name="img2" defaultValue={item.img2 || ''}/>
          <AttachmentInput labelName={getConfig('startupImages', `${this.props.type}:3`)} name="img3" defaultValue={item.img3 || ''} />
          <AttachmentInput labelName={getConfig('startupImages', `${this.props.type}:4`)} name="img4" defaultValue={item.img4 || ''} />
          <Input hidden labelName="图片跳转链接" name="target_url" defaultVlaue={item.target_url} />
          <DateTimeInput labelName="开始时间" defaultValue={item.online_time} name="online_time" />
          <DateTimeInput labelName="结束时间" defaultValue={item.offline_time} name="offline_time" />
          <Submit />
        </form>
      </Modal>
    );
  }
}
StartupAddModal.propTypes = {
  dispatch: PropTypes.func.isRequired,
  submit: PropTypes.func.isRequired,
  type: PropTypes.string.isRequired,
  item: PropTypes.object,
  update: PropTypes.bool,
}

StartupAddModal.defaultProps = {
  item: [],
}

export default connect()(StartupAddModal);

