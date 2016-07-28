import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';

import { commonFetch } from '../../../actions/omg';
import { hideModal } from '../../../actions/modal';
import { AWARD_ADD } from '../../../constants';
import { getConfig } from '../../../config/omg';
import { Modal, Input, Submit, Select, DateTimeInput, Alert, Fieldset, Textarea } from '../../tools';

class ExperienceAddModal extends Component {
  constructor(props) {
    super(props);
    this.timeTypeChange = this.timeTypeChange.bind(this);
    this.addAward = this.addAward.bind(this);
    const types = getConfig('interestTypes');
    const timeTypes = getConfig('interestTimeTypes');
    const platformTypes = getConfig('platformTypes');
    this.state = {
      errorMsg: '',
      awardType: 3,
      type: 3,
      timeType: 1,
      types,
      timeTypes,
      platformTypes,
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
          this.props.callback();
        } else {
          this.setState({
            errorMsg: json.data.error_msg,
          });
        }
      });
  }
  timeTypeChange(e) {
    const value = $(e.target).val();
    this.setState({
      timeType: +value,
    });
  }
  render() {
    let timeTypeFileds = false;
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
          <DateTimeInput required key="3" labelName="有效期结束时间" name="effective_time_end" />,
        ];
        break;
      default:
    }
    return (
      <Modal title="添加体验金">
        <form method="post" onSubmit={this.addAward}>
          <Alert msg={this.state.errorMsg} />
          <input type="hidden" name="award_type" value={this.state.awardType} />
          <Input labelName="名称" name="name" />
          <Input labelName="体验金额" name="experience_amount_money" />
          <Fieldset>
            <Select
              labelName="有效期类型"
              name="effective_time_type"
              options={this.state.timeTypes}
              onChange={this.timeTypeChange}
            />
            {timeTypeFileds}
          </Fieldset>
          <Select name="platform_type" labelName="限制平台" options={this.state.platformTypes} />
          <Textarea labelName="限制说明" name="limit_desc" />
          <hr style={{ borderStyle: 'dashed' }} />
          <Textarea labelName="站内信模板" defaultValue={getConfig('templateTypes', this.state.type)} name="message" />
          <Textarea labelName="短信模板" name="mail" />
          <Submit />
        </form>
      </Modal>
    );
  }
}

ExperienceAddModal.propTypes = {
  dispatch: PropTypes.func.isRequired,
  callback: PropTypes.func.isRequired,
}

export default connect()(ExperienceAddModal);
