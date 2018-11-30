import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {  Alert,Submit, Modal,FileInput } from '../../tools';
import { getConfig } from '../../../config/omg';
import { EXCHANGE_IMPORT } from '../../../constants';
import { commonFetch, fetchAction } from '../../../actions/omg';

class ExchangeUploadModal extends Component {
  constructor(props) {
    super(props);
  }

  render() {
  
    return (
      <Modal title='导入Execl'>
        <form method="post" onSubmit={this.props.submit}>
          <Alert msg={this.props.errorMsg} />
          <div hidden={this.props.update}>
            <FileInput labelName="导入文件" name="file" />
          </div>
          <br/>
          <Submit />
        </form>
      </Modal>
    );
  }
}

ExchangeUploadModal.propTypes = {
  dispatch: PropTypes.func.isRequired,
  submit: PropTypes.func.isRequired,
  errorMsg: PropTypes.string,
}

ExchangeUploadModal.defaultProps = {
  errorMsg: '',
}

export default connect( state => {
  const { omg } = state;
  const errorMsg = omg.errorMsg[EXCHANGE_IMPORT] || '';
  return {
    errorMsg,
  };
})(ExchangeUploadModal);
