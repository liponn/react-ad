import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Modal, Alert, Submit, FileInput } from '../../tools';


class AddModal extends Component {
  constructor(props) {
    super(props);
  }
  static propTypes = {
    submit: PropTypes.func.isRequired,
    errorMsg: PropTypes.string,
  }
  static defaultProps = {
    dispatch: PropTypes.func.isRequired,
    submit: PropTypes.func.isRequired,
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
