import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Modal, Submit, Select, Textarea } from '../../tools';
import { fetchAction } from '../../../actions/omg';
import { BBS_BLOCK_LIST, Radio } from '../../../constants';

class UnVerifyModal extends Component {
  constructor (props) {
    super(props);
    this.list = this.list.bind(this);
  }

  componentDidMount() {
    this.list();
  }

  list() {
    this.props.dispatch(fetchAction({
      type: BBS_BLOCK_LIST,
      method: 'GET',
    })).then(json => {
      if (json.error_code === 0) {
        this.props.dispatch(hideModal(true));
      } else {
        alert(json.data.error_msg);
      }
    });
  }

  render() {
    return (
      <Modal title="评论">
        <form onSubmit={this.props.submit}>
          <input type="hidden" name="tid" value={this.props.id} />
          <Select
            labelName="马甲"
            name="user_id"
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

UnVerifyModal.propTypes = {
  submit: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
  getAdmins: PropTypes.array,
}

UnVerifyModal.defaultProps = {
}


export default connect(state => {
  const { omg } = state;
  const blocks = omg[BBS_BLOCK_LIST] || [];
  return {
    blocks,
  };
})(UnVerifyModal);
