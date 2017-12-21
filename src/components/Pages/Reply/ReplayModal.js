import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Modal, Submit, Select, Textarea } from '../../tools';
import { fetchAction, } from '../../../actions/omg';
import { BBS_BLOCK_LIST, Radio } from '../../../constants';

class ReplayModal extends Component {
  constructor (props) {
    super(props);
  }


  render() {
    return (
      <Modal title="评论回复">
        <form onSubmit={this.props.submit}>
          <input type="hidden" name="comment_id" value={this.props.id} />
          <Select
            labelName="马甲"
            name="from_id"
            options={this.props.getAdmins() || []}
          />
          <Textarea
            labelName="内容"
            name="content"
            defaultValue=""
          />
          <Submit value="确认" />
        </form>
      </Modal>
    );
  }
}

ReplayModal.propTypes = {
  submit: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
  getAdmins: PropTypes.func.isRequired,
}

ReplayModal.defaultProps = {
}


export default connect(state => {
  const { omg } = state;
  const blocks = omg[BBS_BLOCK_LIST] || [];
  return {
    blocks,
  };
})(ReplayModal);
