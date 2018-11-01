import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Modal, Alert, Input, AttachmentInput, DateTimeInput, Submit,Fieldset, Select, Textarea } from '../../tools';
import { getConfig } from '../../../config/omg';


class AddCardModal extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  static propTypes = {
    submit: PropTypes.func.isRequired,
    type: PropTypes.string.isRequired,
    errorMsg: PropTypes.string,
    item: PropTypes.object,
  }
  static defaultProps = {
    dispatch: PropTypes.func.isRequired,
    submit: PropTypes.func.isRequired,
    item: {},
  }
  render() {
    const item = this.props.item || {};
    return (
        <Modal title="添加">
          <form method="post" ref="form" onSubmit={this.props.submit}>
            <Alert msg={this.state.errorMsg} />
            <input type="hidden" name="id" defaultValue={item.id} />
            <Input labelName="奖品名" name="award_name" defaultValue={item.award_name} />
            <Input labelName="奖品简介" name="info" defaultValue={item.info} />
            <AttachmentInput labelName="配图" name="img" defaultValue={item.img} />
            <Submit />
          </form>
        </Modal>
    );
  }
}
export default connect()(AddCardModal);
