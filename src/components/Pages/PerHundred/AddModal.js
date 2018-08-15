import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Modal, Input, Submit, DateTimeInput, Textarea, AttachmentInput, Select } from '../../tools';
import { getConfig } from '../../../config/omg';

class AddModal extends Component {
  constructor (props) {
    super(props);
  }
  render() {
    return (
      <Modal title={this.props.update ? '编辑逢百活动' : '添加逢百活动'}>
        <form onSubmit={this.props.submit}>
          <input type="hidden" name="id" defaultValue={this.props.item.id || ''} />
          <Input labelName="终极大奖名称" name="ultimate_award" type="text" required defaultValue={this.props.item.ultimate_award || ''} />
          <AttachmentInput labelName="终极大奖配图（小）" name="ultimate_img1" position={`banner_${this.props.item.ultimate_img1}`} defaultValue={this.props.item.ultimate_img1} />
          <AttachmentInput labelName="终极大奖配图（大）" name="ultimate_img2" position={`banner_${this.props.item.ultimate_img1}`} defaultValue={this.props.item.ultimate_img1} />
          <AttachmentInput labelName="PC终极大奖配图（小）" name="ultimate_pc1" position={`banner_${this.props.item.ultimate_pc1}`} defaultValue={this.props.item.ultimate_pc1} />
          <AttachmentInput labelName="PC终极大奖配图（大）" name="ultimate_pc2" position={`banner_${this.props.item.ultimate_pc1}`} defaultValue={this.props.item.ultimate_pc1} />
          <Input labelName="一马当先奖名称" name="first_award" type="text" required defaultValue={this.props.item.first_award || ''} />
          <AttachmentInput labelName="一马当先奖配图（小）" name="first_img1" position={`banner_${this.props.item.first_img1}`} defaultValue={this.props.item.first_img1} />
          <AttachmentInput labelName="一马当先奖配图（大）" name="first_img2" position={`banner_${this.props.item.first_img2}`} defaultValue={this.props.item.first_img2} />
          <AttachmentInput labelName="PC一马当先奖配图（小）" name="first_pc1" position={`banner_${this.props.item.first_pc1}`} defaultValue={this.props.item.first_pc1} />
          <AttachmentInput labelName="PC一马当先奖配图（大）" name="first_pc2" position={`banner_${this.props.item.first_pc2}`} defaultValue={this.props.item.first_pc2} />
          <Input labelName="一锤定音奖名称" name="last_award" type="text" required defaultValue={this.props.item.last_award || ''} />
          <AttachmentInput labelName="一锤定音奖配图（小）" name="last_img1" position={`banner_${this.props.item.last_img1}`} defaultValue={this.props.item.last_img1} />
          <AttachmentInput labelName="一锤定音奖配图（大）" name="last_img2" position={`banner_${this.props.item.last_img2}`} defaultValue={this.props.item.last_img2} />
          <AttachmentInput labelName="PC一锤定音奖配图（小）" name="last_pc1" position={`banner_${this.props.item.last_pc1}`} defaultValue={this.props.item.last_pc1} />
          <AttachmentInput labelName="PC一锤定音奖配图（大）" name="last_pc2" position={`banner_${this.props.item.last_pc2}`} defaultValue={this.props.item.last_pc2} />
          <Input labelName="阳光普照奖名称" name="sunshine_award" type="text" required defaultValue={this.props.item.sunshine_award || ''} />
          <AttachmentInput labelName="阳光普照奖配图（小）" name="sunshine_img1" position={`banner_${this.props.item.sunshine_img1}`} defaultValue={this.props.item.sunshine_img1} />
          <AttachmentInput labelName="阳光普照奖配图（大）" name="sunshine_img2" position={`banner_${this.props.item.sunshine_img2}`} defaultValue={this.props.item.sunshine_img2} />
          <AttachmentInput labelName="PC阳光普照奖配图（小）" name="sunshine_pc1" position={`banner_${this.props.item.sunshine_pc1}`} defaultValue={this.props.item.sunshine_pc1} />
          <AttachmentInput labelName="PC阳光普照奖配图（大）" name="sunshine_pc2" position={`banner_${this.props.item.sunshine_pc2}`} defaultValue={this.props.item.sunshine_pc2} />
          <Input hidden={this.props.update ? 'hidden' : ''} labelName="开奖号数量" name="numbers" type="number" required defaultValue={this.props.item.numbers || ''} />
          <DateTimeInput required labelName="开始时间" name="start_time" defaultValue={this.props.item.start_time} />
          <Submit />
        </form>
      </Modal>
    );
  }
}

AddModal.propTypes = {
  submit: PropTypes.func.isRequired,
  update: PropTypes.bool,
  item: PropTypes.obj,
}

AddModal.defaultProps = {
  item: {},
  update: false,
}


export default connect()(AddModal);