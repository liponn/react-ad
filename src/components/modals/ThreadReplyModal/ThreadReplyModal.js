import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Input, Select, Submit, Alert, Modal,Editor,Checkbox,Radio } from '../../tools';

class ThreadReplyModal extends Component {
  constructor(props) {
    super(props);
  }
    
  render() {
    const id = this.props.id;
    const vests = this.props.vests || [];
    return (
        <Modal key={id} title='帖子回复'>
            <form name="formmove" method="post" onSubmit={this.props.submit}>
                <Alert msg={this.props.errorMsg} />
                <input type="hidden" name="tid" value={id} />
                <div className="form-group row">
                  <label className="col-sm-4 form-control-label text-xs-right">选择用户:</label>
                  <div className="col-sm-6">
                    <select ref="select" name="user_id" className="form-control c-select" defaultValue={vests[0].user_id}>
                      {vests.map((vest,index)=>(
                        <option key={index} value={vest.user_id}>{vest.nickname}</option>
                      ))};
                    </select>
                  </div>
                </div>
                <Editor name="content" />
                <Checkbox name="comment_type"  checked={false} labelName="官方评论" />
                <Submit />
            </form>
        </Modal>
    );
  }
}

ThreadReplyModal.propTypes = {
  submit: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
  errorMsg: PropTypes.string,
}

ThreadReplyModal.defaultProps = {
  errorMsg: '',
}

export default ThreadReplyModal;
