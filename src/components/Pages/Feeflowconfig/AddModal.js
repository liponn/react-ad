import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import { Modal, Alert, Input, AttachmentInput, DateTimeInput, Submit,Fieldset, Select, Textarea } from '../../tools';
import { getConfig } from '../../../config/omg';


class AddModal extends Component {
  constructor(props) {
    super(props);
    this.typeChange = this.typeChange.bind(this);
    const feeFlowConfigChildTypes = getConfig('feeFlowConfigChildTypes');
    const feeFlowConfigChildOperator = getConfig('feeFlowConfigChildOperator');
    const item = this.props.item || {};
    this.state = {
      type: item.type || 1,
      feeFlowConfigChildTypes,
      feeFlowConfigChildOperator,
    };
  }
  typeChange(e) {
    const value = $(e.target).val();
    this.setState({
      type: +value,
    });
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
        let operatorTypeFileds = [
          <Fieldset>
            <Select
                labelName="运营商类型"
                name="operator_type"
                defaultValue={item.operator_type}
                options={this.state.feeFlowConfigChildOperator}
            />
          </Fieldset>
        ];
    return (
        <Modal title="添加">
          <form method="post" ref="form" onSubmit={this.props.submit}>
            <Alert msg={this.state.errorMsg} />
            <input type="hidden" name="id" defaultValue={item.id} />
            <Input labelName="商品名称" name="name" defaultValue={item.name} />
            <Input labelName="出售价格" name="price" defaultValue={item.price} />
            <Fieldset>
              <Select
                  labelName="商品类型"
                  name="type"
                  defaultValue={this.props.type}
                  options={this.state.feeFlowConfigChildTypes}
                  onChange={this.typeChange}
              />
            </Fieldset>
            {operatorTypeFileds}
            <Submit />
          </form>
        </Modal>
    );
  }
}
export default connect()(AddModal);
