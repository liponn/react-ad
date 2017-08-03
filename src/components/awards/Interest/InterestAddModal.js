import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import { getConfig } from '../../../config/omg';
import { Modal, Input, Submit, Select, DateTimeInput, Alert, Fieldset, Textarea, PercentInput } from '../../tools';

class InterestAddModal extends Component {
  constructor(props) {
    super(props);
    this.typeChange = this.typeChange.bind(this);
    this.timeTypeChange = this.timeTypeChange.bind(this);
    this.durationTypeChange = this.durationTypeChange.bind(this);
    this.initLimitDes = this.initLimitDes.bind(this);
    const types = getConfig('interestTypes');
    const timeTypes = getConfig('interestTimeTypes');
    const projectTypes = getConfig('projectTypes');
    const platformTypes = getConfig('platformTypes');
    const projectDurationTypes = getConfig('projectDurationTypes');
    const item = props.item || {};
    this.state = {
      errorMsg: '',
      awardType: 1,
      projectTypes,
      platformTypes,
      projectDurationTypes,
      type: item.rate_increases_type ? item.rate_increases_type : 1,
      timeType: item.effective_time_type ? item.effective_time_type : 1,
      durationType: item.project_duration_type ? item.project_duration_type : 1,
      types,
      timeTypes,
      limitDes: item.limit_desc || '',
    };
  }


  durationTypeChange(e) {
    const value = e.target.value;
    this.setState({
      durationType: +value,
    });
    this.initLimitDes();
  }
  typeChange(e) {
    const value = e.target.value;
    this.setState({
      type: +value,
    });
    this.initLimitDes();
  }
  timeTypeChange(e) {
    const value = e.target.value;
    this.setState({
      timeType: +value,
    });
  }
  initLimitDes() {
    const formData = new FormData(this.refs.form);
    
    const limitDesArr = [];
    const investmentThreshold = formData.get('investment_threshold') || 0;
    const projectDurationType = formData.get('project_duration_type') || 0;
    const projectDurationTime = formData.get('project_duration_time') || 0;
    const projectType = formData.get('project_type') || 0;
    const platformType = formData.get('platform_type') || 0;
    const productId = formData.get('product_id') || '';
    const rateIncreasesType = formData.get('rate_increases_type') || 0;
    const rateIncreasesTime = formData.get('rate_increases_time') || 0;
    // 投资门槛
    if (+investmentThreshold !== 0) {
      limitDesArr.push(`${investmentThreshold}元起投`);
    }
    // 项目时间限制
    if (+projectDurationType !== 1) {
      limitDesArr.push(`限${projectDurationTime}${getConfig('projectDurationTypes', projectDurationType)}`);
    }
    // 项目类型限制
    if (+projectType !== 0) {
      limitDesArr.push(`${getConfig('projectTypes', projectType)}专享`);
    }
    // 加息时长
    console.dir(rateIncreasesType);
    if (+rateIncreasesType === 2) {
      limitDesArr.push(`加息${rateIncreasesTime}天`);
    }
    // 平台限制
    if (+platformType !== 0) {
      limitDesArr.push(`${getConfig('platformTypes', platformType)}专享`);
    }
    // 标限制
    if (productId) {
      limitDesArr.push('限特定标使用');
    }
    this.setState({
      limitDes: limitDesArr.join('，'),
    });
  }
  render() {
    let typeFileds = false;
    let timeTypeFileds = false;
    let durationTypeFileds = false;
    const item = this.props.item || {};

    // 根据红包类型显示字段
    switch (this.state.type) {
      case 1:
        typeFileds = false;
        break;
      case 2:
        typeFileds = [<Input required key="1" defaultValue={item.rate_increases_time} onChange={this.initLimitDes} type="number" labelName="加息天数" name="rate_increases_time" />];
        break;
      default:
    }
    // 根绝有效期类型显示相应字段
    switch (this.state.timeType) {
      case 1:
        timeTypeFileds = [
          <Input key="1" required type="number" defaultValue={item.effective_time_day} labelName="有效期天数" name="effective_time_day" />
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
    if (this.state.durationType > 1) {
      durationTypeFileds = <Input type="number" labelName="项目期限时长" onChange={this.initLimitDes} defaultValue={item.project_duration_time} name="project_duration_time" />;
    }
    return (
      <Modal title="添加加息券">
        <form method="post" ref="form" onSubmit={this.props.submit}>
          <Alert msg={this.state.errorMsg} />
          <input type="hidden" name="award_type" value={this.state.awardType} />
          <input type="hidden" name="award_id" value={item.id} />
          <Input labelName="名称" name="name" defaultValue={item.name} />
          <PercentInput labelName="加息值" name="rate_increases" defaultValue={item.rate_increases && (item.rate_increases * 100).toFixed(2)} placeholder="例:2.5代表加息2.5%" />
          <Fieldset>
            <Select
              labelName="加息时长类型"
              name="rate_increases_type"
              defaultValue={item.rate_increases_type}
              options={this.state.types}
              onChange={this.typeChange}
            />
            {typeFileds}
          </Fieldset>
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
          <hr style={{ borderStyle: 'dashed' }} />
          <Input type="number" required labelName="投资门槛" onChange={this.initLimitDes} defaultValue={item.investment_threshold || 0} name="investment_threshold" placeholder="0为不限制" />
          <Select labelName="项目类型" name="project_type" onChange={this.initLimitDes} defaultValue={item.project_type} options={this.state.projectTypes} />
          <Fieldset>
            {durationTypeFileds}
            <Select
              labelName="项目期限类型"
              name="project_duration_type"
              defaultValue={item.project_duration_type}
              onChange={this.durationTypeChange}
              options={this.state.projectDurationTypes}
            />
          </Fieldset>
          <Input labelName="产品ID" name="product_id" onChange={this.initLimitDes} defaultValue={item.product_id} placeholder="不填则不限制" />
          <Select labelName="平台限制" name="platform_type" onChange={this.initLimitDes} defaultValue={item.platform_type} options={this.state.platformTypes} />
          <Textarea labelName="限制说明" name="limit_desc" value={this.state.limitDes} />
          <hr style={{ borderStyle: 'dashed' }} />
          <Textarea labelName="站内信模板" name="mail" defaultValue={typeof item.mail !== 'undefined' ? item.mail : getConfig('templateTypes', this.state.awardType)} />
          <Textarea labelName="短信模板" name="message" defaultValue={item.message || ''} />
          <Submit />
        </form>
      </Modal>
    );
  }
}

InterestAddModal.propTypes = {
  dispatch: PropTypes.func.isRequired,
  submit: PropTypes.func.isRequired,
  item: PropTypes.object,
}

export default connect()(InterestAddModal);
