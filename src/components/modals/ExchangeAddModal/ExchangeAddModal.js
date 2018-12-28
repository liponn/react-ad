import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Input,Radio, DateTimeInput, Select, Submit, Alert, Modal,AttachmentInput } from '../../tools';
import { getConfig } from '../../../config/omg';
import { EXCHANGE_DT_UPDATE } from '../../../constants';
import { commonFetch, fetchAction } from '../../../actions/omg';

class ExchangeAddModal extends Component {
  constructor(props) {
    super(props);
    this.change = this.change.bind(this);
    this.state = {
      status:props.status,
    };
  }

  change(e){
    const value = e.target.value;
    this.setState({
      track_status:+value
    });
  }

  render() {
    const item = this.props.item || {};
    const track_status = parseInt(this.state.track_status);
    return (
      <Modal title='修改收货手机号/地址'>
        <form method="post" onSubmit={this.props.submit}>
          <Alert msg={this.props.errorMsg} />
          <input type="hidden" name="id" value={item.id} />
          <Input required labelName="收货手机号" name="phone" defaultValue={item.phone} />
          <Input required labelName="收货地址" name="address" defaultValue={item.address} />
          <div className="col-sm-12 form-control-label text-xs-center">
            <Radio labelName="已发货" onChange={this.change} value={1} name="track_status" checked={track_status ? true : false}/>
            <Radio labelName="未发货" onChange={this.change} value={0} name="track_status" checked={track_status ? false: true}/>
          </div>
          <br/>
          <Submit />
        </form>
      </Modal>
    );
  }
}

ExchangeAddModal.propTypes = {
  dispatch: PropTypes.func.isRequired,
  submit: PropTypes.func.isRequired,
  errorMsg: PropTypes.string,
}

ExchangeAddModal.defaultProps = {
  errorMsg: '',
}

export default connect( state => {
  const { omg } = state;
  const errorMsg = omg.errorMsg[EXCHANGE_DT_UPDATE] || '';
  return {
    errorMsg,
  };
})(ExchangeAddModal);
