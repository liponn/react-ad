import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import { CHANNEL_LIST, CHANNEL_DEL, CHANNEL_INFO, CHANNEL_PUT, CHANNEL_ADD } from '../../../constants';
import { Modal, Input, Submit, Select } from '../../tools';
import { getConfig } from '../../../config/omg';

class ChannelAddModal extends Component {
  constructor (props) {
    super(props);
  }
  render() {
    return (
      <Modal title={this.props.update ? '编辑渠道' : '添加渠道'}>
        <form onSubmit={this.props.submit}>
          <input type="hidden" name="id" defaultValue={this.props.item.id || ''} />
          <Input labelName="中文说明" name="name" defaultValue={this.props.item.name || ''} />
          <Input labelName="渠道名称" placeholder="只能包含英文和数字" name="alias_name" defaultValue={this.props.item.alias_name || ''} />
          <div hidden>
            <Select labelName="合作状态" options={getConfig('channelStatusTypes')} name="coop_status" defaultValue={this.props.item.coop_status || '0'} />
            <Select labelName="计费方式" options={getConfig('channelClassTypes')} name="classification" defaultValue={this.props.item.classification || '----'} />
          </div>
          <Submit />
        </form>
      </Modal>
    );
  }
}

ChannelAddModal.propTypes = {
  submit: PropTypes.func.isRequired,
  item: PropTypes.obj,
}

ChannelAddModal.defaultProps = {
  item: {},
}


export default connect()(ChannelAddModal);
