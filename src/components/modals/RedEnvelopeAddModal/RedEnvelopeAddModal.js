import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';

import { commonFetch } from '../../../actions/omg';
import { hideModal } from '../../../actions/modal';
import { AWARD_ADD } from '../../../constants';
import { getConfig } from '../../../config/omg';
import { Modal, Input, Submit, Select, DateTimeInput, Alert } from '../../tools';

class RedEnvelopeAddModal extends Component {
  constructor(props) {
    super(props);
    this.redTypeChange = this.redTypeChange.bind(this);
    this.effectiveTimeTypeChange = this.effectiveTimeTypeChange.bind(this);
    this.addRedEnvelope = this.addRedEnvelope.bind(this);
    const redEnvelopeTypes = getConfig('redEnvelopeTypes');
    const redEnvelopeTimeTypes = getConfig('redEnvelopeTimeTypes');
    this.state = {
      errorMsg: '',
      redType: 1,
      effectiveTimeType: 1,
      redEnvelopeTypes,
      redEnvelopeTimeTypes,
    };
  }
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
  }

  static defaultProps = {

  }

  addRedEnvelope(e) {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    this.props.dispatch(commonFetch(AWARD_ADD, 'POST', formData))
      .then(json => {
        if (json.error_code === 0) {
          this.props.dispatch(hideModal());
        }else{
          this.setState({
            errorMsg: json.data.error_msg,
          });
        }
      });
  }
  redTypeChange(e) {
    const value = $(e.target).val();
    this.setState({
      redType: +value,
    });
  }
  effectiveTimeTypeChange(e) {
    const value = $(e.target).val();
    this.setState({
      effectiveTimeType: +value,
    });
  }
  render() {
    let typeFileds = false;
    let timeTypeFileds = false;

    // 根据红包类型显示字段
    switch (this.state.redType) {
      case 1:
        typeFileds = [<Input required key="1" type="number" labelName="红包金额" name="red_money" />];
        break;
      case 2:
        typeFileds = [
          <Input
            key="2"
            required
            type="number"
            labelName="红包最高金额"
            type="number"
            name="red_max_money"
          />,
          <Input key="3" required labelName="红包百分比" name="percentage" />,
        ];
        break;
      default:
    }
    // 根绝有效期类型显示相应字段
    switch (this.state.effectiveTimeType) {
      case 1:
        timeTypeFileds = [
          <Input key="1" required type="number" labelName="有效期天数" name="effective_time_day" />
        ];
        break;
      case 2:
        timeTypeFileds = [
          <DateTimeInput required key="2" labelName="有效期开始时间" name="effective_time_start" />,
          <DateTimeInput required key="3" labelName="有效期结束时间" name="effective_time_start" />,
        ];
        break;
      default:
    }
    return (
      <Modal title="添加红包">
        <form method="post" onSubmit={this.addRedEnvelope}>
          <Alert msg={this.state.errorMsg} />
          <input type="hidden" name="award_type" value="2" />
          <Input labelName="名称" name="name" />
          <div style={{ backgroundColor: '#f7f7f7' }}>
            <Select
              labelName="红包类型"
              name="red_type"
              options={this.state.redEnvelopeTypes}
              onChange={this.redTypeChange}
            />
            {typeFileds}
          </div>
          <div style={{ backgroundColor: '#f7f7f7' }}>
            <Select
              labelName="有效期类型"
              name="effective_time_type"
              options={this.state.redEnvelopeTimeTypes}
              onChange={this.effectiveTimeTypeChange}
            />
            {timeTypeFileds}
          </div>
          <Input type="number" labelName="投资门槛" name="investment_threshold" />
          <Input labelName="项目期限类型" name="project_duration_type" />
          <Input labelName="项目类型" name="project_type" />
          <Input labelName="产品ID" name="product_id" />
          <Input labelName="平台端" name="platform_type" />
          <Input labelName="限制说明" name="limit_desc" />
          <Submit />
        </form>
      </Modal>
    );
  }
}

export default connect()(RedEnvelopeAddModal);