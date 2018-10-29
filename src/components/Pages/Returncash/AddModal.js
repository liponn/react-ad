import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Modal, Alert, Input, AttachmentInput, DateTimeInput, Submit,Fieldset, Select, Textarea } from '../../tools';
import { getConfig } from '../../../config/omg';


class AddModal extends Component {
  constructor(props) {
    super(props);
    this.typeChange = this.typeChange.bind(this);
    const feeFlowConfigChildTypes = getConfig('feeFlowConfigChildTypes');
    const feeFlowConfigChildOperator = getConfig('feeFlowConfigChildOperator');
    const item = this.props.item || {};
    this.state = {
      type: item.type || 1,
      feeFlowConfigChildTypes,
      feeFlowConfigChildOperator,
    };
  }
  typeChange(e) {
    const value = $(e.target).val();
    this.setState({
      type: +value,
    });
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
    return (
        <Modal title="添加">
          <form method="post" ref="form" onSubmit={this.props.submit}>
            <Alert msg={this.state.errorMsg} />
            <FileInput labelName="文件" name="file" />
            <Submit />
          </form>
        </Modal>
    );
  }
}
export default connect()(AddModal);
