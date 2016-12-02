import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import { Modal, Input, Submit } from '../../tools';

class AddChanceModal extends Component {
  constructor (props) {
    super(props);
  }
  render() {
    return (
      <Modal title="添加抽奖次数">
        <form onSubmit={this.props.submit}>
          <Input labelName="手机号" name="phone" type="number" required />
          <Input labelName="抽奖次数" name="num" type="number" required />
          <Submit />
        </form>
      </Modal>
    );
  }
}

AddChanceModal.propTypes = {
  submit: PropTypes.func.isRequired,
}

AddChanceModal.defaultProps = {
}


export default connect()(AddChanceModal);