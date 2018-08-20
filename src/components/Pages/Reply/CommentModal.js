import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Modal, Submit,Input,Alert,Textarea} from '../../tools';
import { fetchAction, } from '../../../actions/omg';
import { BBS_BLOCK_LIST, Radio } from '../../../constants';

class CommentModal extends Component {
  constructor (props) {
    super(props);
  }


  render() {
    return (
      <Modal title={this.props.update ? "编辑评论" :"评论帖子"}>
        <form onSubmit={this.props.submit}>
          <Alert msg={this.props.errorMsg} />
          { this.props.update ? <Input type='hidden' name='id' defaultValue={this.props.item.id} /> : ""}
          {   
            this.props.update ? <Input labelName='用户ID' name='user_id' defaultValue={this.props.item.user_id} /> :
            <Input labelName='用户ID' name='user_id' />
          }

          {
            this.props.update ?  <Input labelName="帖子ID" name="tid" defaultValue={this.props.item.tid} /> : 
            <Input labelName="帖子ID" name="tid"  />
          }
          
          {
            this.props.update ? <Textarea labelName="内容" name="content" defaultValue={this.props.item.content} /> : 
            <Textarea labelName="内容" name="content" />
          }
          <Submit value="确认" />
        </form>
      </Modal>
    );
  }
}

CommentModal.propTypes = {
  submit: PropTypes.func.isRequired,
  update: PropTypes.bool,
}

CommentModal.defaultProps = {
}


export default connect(state => {
  const { omg } = state;
  return {
  };
})(CommentModal);
