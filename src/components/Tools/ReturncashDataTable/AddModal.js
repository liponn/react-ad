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
      <Modal title={this.props.update ? '编辑' : '添加'}>
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
  columns: PropTypes.array.isRequired,
  item: PropTypes.object,
  update: PropTypes.bool,
}

AddModal.defaultProps = {
  item: {},
  update: false,
}


export default connect()(AddModal);
