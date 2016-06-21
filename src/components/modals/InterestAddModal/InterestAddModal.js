import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';

import { commonFetch } from '../../../actions/omg';
import { hideModal } from '../../../actions/modal';
import { AWARD_ADD, AWARD_LIST } from '../../../constants';
import { getConfig } from '../../../config/omg';
import { Modal, Input, Submit, Select, DateTimeInput, Alert, Fieldset } from '../../tools';

class InterestAddModal extends Component {
  constructor(props) {
    super(props);
    this.typeChange = this.typeChange.bind(this);
    this.timeTypeChange = this.timeTypeChange.bind(this);
    this.addAward = this.addAward.bind(this);
    const types = getConfig('interestTypes');
    const timeTypes = getConfig('interestTimeTypes');
    this.state = {
      errorMsg: '',
      awardType: 1,
      effectiveTimeType: 1,
      type: 1,
      timeType: 1,
      types,
      timeTypes,
    };
  }

  addAward(e) {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    this.props.dispatch(commonFetch(AWARD_ADD, 'POST', formData))
      .then(json => {
        if (json.error_code === 0) {
          this.props.dispatch(hideModal());
          const formData2 = new FormData;
          formData2.append('award_type', this.state.awardType);
          this.props.dispatch(commonFetch(AWARD_LIST, 'POST', formData2));
        }else{
          this.setState({
            errorMsg: json.data.error_msg,
          });
        }
      });
  }
  typeChange(e) {
    const value = $(e.target).val();
    this.setState({
      type: +value,
    });
  }
  timeTypeChange(e) {
    const value = $(e.target).val();
    this.setState({
      timeType: +value,
    });
  }
  render() {
    let typeFileds = false;
    let timeTypeFileds = false;

    // 根据红包类型显示字段
    switch (this.state.type) {
      case 1:
        typeFileds = false;
        break;
      case 2:
        typeFileds = [<Input required key="1" type="number" labelName="加息时长天数" name="red_money" />];
        break;
      case 3:
        typeFileds = [
          <DateTimeInput labelName="加息时长开始时间" name="rate_increases_start" />,
          <DateTimeInput labelName="加息时长结束时间" name="rate_increases_end" />,
        ];
        break;
      default:
    }
    // 根绝有效期类型显示相应字段
    switch (this.state.timeType) {
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
      <Modal title="添加加息券">
        <form method="post" onSubmit={this.addAward}>
          <Alert msg={this.state.errorMsg} />
          <input type="hidden" name="award_type" value={this.state.awardType} />
          <Input labelName="名称" name="name" />
          <Input labelName="加息值" name="rate_increases" />
          <Fieldset>
            <Select
              labelName="加息时长类型"
              name="rate_increases_type"
              options={this.state.types}
              onChange={this.typeChange}
            />
            {typeFileds}
          </Fieldset>
          <Fieldset>
            <Select
              labelName="有效期类型"
              name="effective_time_type"
              options={this.state.timeTypes}
              onChange={this.timeTypeChange}
            />
            {timeTypeFileds}
          </Fieldset>
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

InterestAddModal.propTypes = {
  dispatch: PropTypes.func.isRequired,
}

export default connect()(InterestAddModal);
