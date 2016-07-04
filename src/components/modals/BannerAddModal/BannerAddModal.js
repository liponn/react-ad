import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import { fetchAction } from '../../../actions/omg';
import { hideModal } from '../../../actions/modal'
import { BANNER_ADD } from '../../../constants'
import { Modal, Alert, Input, Textarea, Submit, DateTimeInput, AttachmentInput } from '../../tools';

class BannerAddModal extends Component {
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
      type: BANNER_ADD,
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
      <Modal title="添加banner">
        <form method="post" ref="addForm" onSubmit={this.onSubmit}>
          <Alert msg={this.state.errorMsg} />
          <input type="hidden" name="position" value={this.props.type} />
          <Input labelName="图片名称" name="name" />
          <AttachmentInput labelName="banner图片" name="img_path" />
          <Input labelName="图片跳转链接" name="img_url" />
          <Input type="number" labelName="排序" name="sort" />
          <DateTimeInput labelName="开始时间" name="start" />
          <DateTimeInput labelName="结束时间" name="end" />
          <Textarea labelName="图片描述" name="desc" />
          <Submit />
        </form>
      </Modal>
    );
  }
}
BannerAddModal.propTypes = {
  dispatch: PropTypes.func.isRequired,
  callback: PropTypes.func.isRequired,
  type: PropTypes.string.isRequired,
}

export default connect(state => ({}))(BannerAddModal);

