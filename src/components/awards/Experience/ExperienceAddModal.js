import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import { getConfig } from '../../../config/omg';
import { Modal, Input, Submit, Select, DateTimeInput, Alert, Fieldset, Textarea } from '../../tools';

class ExperienceAddModal extends Component {
  constructor(props) {
    super(props);
    this.timeTypeChange = this.timeTypeChange.bind(this);
    const types = getConfig('interestTypes');
    const timeTypes = getConfig('interestTimeTypes');
    const platformTypes = getConfig('platformTypes');
    const item = props.item || {};
    this.state = {
      errorMsg: '',
      awardType: 3,
      type: 3,
      timeType: item.effective_time_type || 1,
      types,
      timeTypes,
      platformTypes,
    };
  }
  timeTypeChange(e) {
    const value = $(e.target).val();
    this.setState({
      timeType: +value,
    });
  }
  render() {
    const item = this.props.item || {};
    let timeTypeFileds = false;
    // 根绝有效期类型显示相应字段
    switch (this.state.timeType) {
      case 1:
        timeTypeFileds = [
          <Input key="1" required type="number" labelName="有效期天数" defaultValue={item.effective_time_day} name="effective_time_day" />
        ];
        break;
      case 2:
        timeTypeFileds = [
          <DateTimeInput required key="2" labelName="有效期开始时间" defaultValue={item.effective_time_start} name="effective_time_start" />,
          <DateTimeInput required key="3" labelName="有效期结束时间" defaultValue={item.effective_time_end} name="effective_time_end" />,
        ];
        break;
      default:
    }
    return (
      <Modal title="添加体验金">
        <form method="post" onSubmit={this.props.submit}>
          <Alert msg={this.state.errorMsg} />
          <input type="hidden" name="award_type" value={this.state.awardType} />
          <input type="hidden" name="award_id" defaultValue={item.id} />
          <Input labelName="名称" name="name" defaultValue={item.name} />
          <Input labelName="体验金额" type="number" name="experience_amount_money" defaultValue={item.experience_amount_money} />
          <Fieldset>
            <Select
              labelName="有效期类型"
              name="effective_time_type"
              defaultValue={item.effective_time_type}
              options={this.state.timeTypes}
              onChange={this.timeTypeChange}
            />
            {timeTypeFileds}
          </Fieldset>
          <Select name="platform_type" labelName="限制平台" defaultValue={item.platform_type} options={this.state.platformTypes} />
          <Textarea labelName="限制说明" name="limit_desc" defaultValue={item.limit_desc} />
          <hr style={{ borderStyle: 'dashed' }} />
          <Textarea labelName="站内信模板" defaultValue={item.mail || getConfig('templateTypes', this.state.type)} name="mail" />
          <Textarea labelName="短信模板" name="message" defaultValue={item.message} />
          <Submit />
        </form>
      </Modal>
    );
  }
}

ExperienceAddModal.propTypes = {
  dispatch: PropTypes.func.isRequired,
  submit: PropTypes.func.isRequired,
  item: PropTypes.object,
}

export default connect()(ExperienceAddModal);
