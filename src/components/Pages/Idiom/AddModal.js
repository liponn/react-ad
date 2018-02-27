import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Modal, Input, Submit, DateTimeInput, Textarea } from '../../tools';
import { getConfig } from '../../../config/omg';

class AddModal extends Component {
  constructor (props) {
    super(props);
  }
  render() {
    return (
      <Modal title={this.props.update ? '编辑成语' : '添加成语'}>
        <form onSubmit={this.props.submit}>
          <input type="hidden" name="id" defaultValue={this.props.item.id || ''} />
          <Input labelName="标题" name="title" defaultValue={this.props.item.title || ''} />
          <Textarea labelName="内容" name="contents" defaultValue={this.props.item.contents} />
          <Input labelName="优先级" type="number" name="priority" defaultValue={this.props.item.priority || ''} />
          <DateTimeInput required labelName="开始时间" name="start_at" defaultValue={this.props.item.start_at} />
          <DateTimeInput required labelName="结束时间" name="end_at" defaultValue={this.props.item.end_at} />
          <Submit />
        </form>
      </Modal>
    );
  }
}

AddModal.propTypes = {
  submit: PropTypes.func.isRequired,
  item: PropTypes.obj,
}

AddModal.defaultProps = {
  item: {},
}


export default connect()(AddModal);