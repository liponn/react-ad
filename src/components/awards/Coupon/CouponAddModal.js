import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import { Modal, Input, Submit, Alert, Textarea, FileInput } from '../../tools';
import { getConfig } from '../../../config/omg';

class CouponAddModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      errorMsg: '',
      type: 6,
    };
  }
  render() {
    const item = this.props.item || {};
    return (
      <Modal title={this.props.update ? '编辑优惠券' : '添加优惠券'}>
        <form method="post" onSubmit={this.props.submit}>
          <Alert msg={this.state.errorMsg} />
          <input type="hidden" name="award_type" value={this.state.type} />
          <input type="hidden" name="award_id" value={item.id} />
          <Input labelName="优惠券名称" name="name" defaultValue={item.name} />
          <div hidden={this.props.update}>
            <FileInput labelName="优惠券文件" name="file" />
          </div>
          <Textarea labelName="优惠券介绍" name="desc" defaultValue={item.desc} />
          <hr style={{ borderStyle: 'dashed' }} />
          <Textarea labelName="站内信模板" defaultValue={typeof item.mail !== 'undefined' ? item.mail : getConfig('templateTypes', this.state.type)} name="mail" />
          <Textarea labelName="短信模板" name="message" defaultValue={item.message} />
          <Submit />
        </form>
      </Modal>
    );
  }
}

CouponAddModal.propTypes = {
  dispatch: PropTypes.func.isRequired,
  submit: PropTypes.func.isRequired,
  update: PropTypes.bool,
}

export default connect()(CouponAddModal);
