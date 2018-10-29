import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Modal, FileInput,Submit } from '../../tools';

class AddModal extends Component {
  constructor (props) {
    super(props);
  }
  render() {
    return (
      <Modal title="添加">
        <form onSubmit={this.props.submit}>
          <div className="form-group row">
            <FileInput labelName="文件" name="file" />
            <Submit />
          </div>
        </form>
      </Modal>
    );
  }
}

AddModal.propTypes = {
  submit: PropTypes.func.isRequired,
}


export default connect()(AddModal);
