import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';

import { commonFetch } from '../../../actions/omg';
import { hideModal } from '../../../actions/modal';
import { AWARD_ADD } from '../../../constants';
import { Modal, Input, Submit, Select, DateTimeInput } from '../../tools';

class RedEnvelopeAddModal extends Component {
  constructor(props) {
    super(props);
    this.redTypeChange = this.redTypeChange.bind(this);
    this.effectiveTimeTypeChange = this.effectiveTimeTypeChange.bind(this);
    this.addRedEnvelope = this.addRedEnvelope.bind(this);
    this.state = {
      redType: 1,
      effectiveTimeType: 1,
      redTypeOptions: [{
        value: 1,
        name: '直抵红包',
      }, {
        value: 2,
        name: '百分比红包',
      }],
      effectiveTimeTypeOptions: [{
        value: 1,
        name: '按天数',
      }, {
        value: 2,
        name: '按时间段',
      }],
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
      .then((code) => {
        if (code === 0) {
          this.dispatch(hideModal());
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
          <input type="hidden" name="award_type" value="2" />
          <Input labelName="名称" name="name" />
          <div style={{ backgroundColor: '#f7f7f7' }}>
            <Select
              labelName="红包类型"
              name="red_type"
              options={this.state.redTypeOptions}
              onChange={this.redTypeChange}
            />
            {typeFileds}
          </div>
          <div style={{ backgroundColor: '#f7f7f7' }}>
            <Select
              labelName="有效期类型"
              name="effective_time_type"
              options={this.state.effectiveTimeTypeOptions}
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