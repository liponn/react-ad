import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Modal, Alert, Input, AttachmentInput, DateTimeInput, Submit,Fieldset, Select, Textarea } from '../../tools';
import { getConfig } from '../../../config/omg';


class UpdateModal extends Component {
  constructor(props) {
    super(props);
    const feeFlowDebitStatus = getConfig('feeFlowDebitStatus');
    const feeFlowOrderStatus = getConfig('feeFlowOrderStatus');
    const item = this.props.item || {};
    this.state = {
      type: item.type || 1,
      feeFlowDebitStatus,
      feeFlowOrderStatus,
    };
  }
  static propTypes = {
    submit: PropTypes.func.isRequired,
    type: PropTypes.string.isRequired,
    errorMsg: PropTypes.string,
    item: PropTypes.object,
  }
  static defaultProps = {
    dispatch: PropTypes.func.isRequired,
    submit: PropTypes.func.isRequired,
    item: {},
  }
  render() {
    const item = this.props.item || {};
    return (
        <Modal title="修改状态">
          <form method="post" ref="form" onSubmit={this.props.submit}>
            <Alert msg={this.state.errorMsg} />
            <input type="hidden" name="id" defaultValue={item.id} />
            序号：{item.id}<br />
            用户ID：{item.user_id}<br />
            订单ID：{item.order_id}<br />
            手机号：{item.phone}<br />
            商品名称：{item.name}<br />
            <Fieldset>
              <Select
                  labelName="扣款状态"
                  name="debit_status"
                  defaultValue={item.debit_status}
                  options={this.state.feeFlowDebitStatus}
              />
            </Fieldset>
            <Fieldset>
              <Select
                  labelName="订单状态"
                  name="order_status"
                  defaultValue={item.order_status}
                  options={this.state.feeFlowOrderStatus}
              />
            </Fieldset>
            <Submit />
          </form>
        </Modal>
    );
  }
}
export default connect()(UpdateModal);
