import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Input, Select, Alert, Submit, Modal } from '../../tools';
import { WORLDCUPCONFIG_ADD } from '../../../constants';

class WorldcupconfigAddModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      errorMsg: '',
    };
  }
  render() {
    return (
      <Modal title={this.props.update ? '编辑球队' : '添加球队'}>
        <form method="post" onSubmit={this.props.submit}>
          <Alert msg={this.state.errorMsg} />
          <input type="hidden" name="id" value={this.props.item.id} />
          <Input labelName="球队" name="team" defaultValue={this.props.item.team} />
          <Input labelName="进球数" type="number" name="number" defaultValue={this.props.item.number || 0} />
          <Submit />
        </form>
      </Modal>
    );
  }
}
WorldcupconfigAddModal.propTypes = {
  dispatch: PropTypes.func.isRequired,
  typeId: PropTypes.number.isRequired,
  submit: PropTypes.func.isRequired,
  update: PropTypes.bool,
  item: PropTypes.object,
}
WorldcupconfigAddModal.defaultProps = {
  item: {},
}
export default connect(state => {
  const { omg } = state;
  const errorMsg = omg.errorMsg[WORLDCUPCONFIG_ADD] || '';
  return {
    errorMsg,
  };
})(WorldcupconfigAddModal);
