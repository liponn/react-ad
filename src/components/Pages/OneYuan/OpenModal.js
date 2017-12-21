import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Modal, Input, Submit } from '../../tools';

class OpenModal extends Component {
  constructor (props) {
    super(props);
  }
  render() {
    return (
      <Modal title="开奖">
        <form onSubmit={this.props.submit}>
          <input type="hidden" name="id" defaultValue={this.props.id} />
          <Input labelName="时时彩期数" placeholder="11位数字例:20161124059" name="expect" type="number" required />
          <Input labelName="时时彩号码" placeholder="1-5位数字,无前置0" name="code" type="number" required />
          <Submit />
        </form>
      </Modal>
    );
  }
}

OpenModal.propTypes = {
  submit: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
}

OpenModal.defaultProps = {
}


export default connect()(OpenModal);