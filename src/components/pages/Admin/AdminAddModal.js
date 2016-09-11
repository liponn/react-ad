import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import { Input, Select, Alert, Submit, Modal } from '../../tools';
import { ADMIN_ADD } from '../../../constants';
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
      <Modal title={this.props.update ? '编辑后台用户' : '添加后台用户'}>
        <form method="post" onSubmit={this.props.submit}>
          <Alert msg={this.state.errorMsg} />
          <input type="hidden" name="id" value={this.props.item.id} />
          <Input labelName="姓名" name="name" defaultValue={this.props.item.name} />
          <Input hidden={this.props.update} labelName="手机号" name="mobile" defaultValue={this.props.item.mobile} />
          <Select labelName="用户组" name="level" options={getConfig('adminTypes')} defaultValue={this.props.item.level} />
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
  const errorMsg = omg.errorMsg[ADMIN_ADD] || '';
  return {
    errorMsg,
  };
})(NoticeAddModal);
