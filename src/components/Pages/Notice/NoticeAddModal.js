import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Input, Editor, Select, AttachmentInput, Alert, Submit, Modal } from '../../tools';
import { NOTICE_ADD} from '../../../constants';
import { getConfig } from '../../../config/omg';

class NoticeAddModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      errorMsg: '',
    };
  }
  render() {
    return (
      <Modal title={this.props.update ? '编辑公告' : '添加公告'}>
        <form id="add-article-form" method="post" onSubmit={this.props.submit}>
          <Alert msg={this.state.errorMsg} />
          <input type="hidden" name="id" value={this.props.item.id} />
          <Input labelName="标题" name="title" defaultValue={this.props.item.title} />
          <Select labelName="平台" name="platform" options={getConfig('noticePlatforms')} defaultValue={this.props.item.platform} />
          <Editor name="content" defaultValue={this.props.item.content} />
          <Submit />
        </form>
      </Modal>
    );
  }
}
NoticeAddModal.propTypes = {
  dispatch: PropTypes.func.isRequired,
  typeId: PropTypes.number.isRequired,
  submit: PropTypes.func.isRequired,
  update: PropTypes.bool,
  item: PropTypes.object,
}
NoticeAddModal.defaultProps = {
  item: {},
}
export default connect(state => {
  const { omg } = state;
  const errorMsg = omg.errorMsg[NOTICE_ADD] || '';
  return {
    errorMsg,
  };
})(NoticeAddModal);
