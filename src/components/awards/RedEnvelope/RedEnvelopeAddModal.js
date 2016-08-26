import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import { getConfig } from '../../../config/omg';
import { Modal, Input, Submit, Select, DateTimeInput, Alert, Fieldset, Textarea, PercentInput } from '../../tools';

class RedEnvelopeAddModal extends Component {
  constructor(props) {
    super(props);
    this.redTypeChange = this.redTypeChange.bind(this);
    this.effectiveTimeTypeChange = this.effectiveTimeTypeChange.bind(this);
    this.durationTypeChange = this.durationTypeChange.bind(this);
    this.initLimitDes = this.initLimitDes.bind(this);
    const redEnvelopeTypes = getConfig('redEnvelopeTypes');
    const redEnvelopeTimeTypes = getConfig('redEnvelopeTimeTypes');
    const projectTypes = getConfig('projectTypes');
    const platformTypes = getConfig('platformTypes');
    const projectDurationTypes = getConfig('projectDurationTypes');
    const item = this.props.item || {};
    this.state = {
      errorMsg: '',
      redType: item.red_type || 1,
      type: 2,
      effectiveTimeType: item.effective_time_type || 1,
      durationType: item.project_duration_type || 1,
      projectTypes,
      platformTypes,
      projectDurationTypes,
      redEnvelopeTypes,
      redEnvelopeTimeTypes,
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
  initLimitDes() {
    const formData = new FormData(this.refs.form);
    const valuesObj = {};
    for (const pair of formData.entries()) {
      valuesObj[pair[0]] = pair[1];
    }
    const limitDesArr = [];
    const investmentThreshold = valuesObj.investment_threshold || 0;
    const projectDurationType = valuesObj.project_duration_type || 0;
    const projectDurationTime = valuesObj.project_duration_time || 0;
    const projectType = valuesObj.project_type || 0;
    const platformType = valuesObj.platform_type || 0;
    const productId = valuesObj.product_id || '';
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
    switch (this.state.redType) {
      case 1:
        typeFileds = [<Input required key="1" type="number" labelName="红包金额" defaultValue={item.red_money} name="red_money" />];
        break;
      case 2:
        typeFileds = [
          <Input
            key="2"
            required
            type="number"
            labelName="红包最高金额"
            type="number"
            defaultValue={item.red_money}
            name="red_max_money"
          />,
          <PercentInput key="3" required placeholder="请输入小数,例:2.5为2.5%" labelName="红包百分比" defaultValue={item.percentage && (item.percentage * 100).toFixed(1)} name="percentage" />,
        ];
        break;
      default:
    }
    // 根绝有效期类型显示相应字段
    switch (this.state.effectiveTimeType) {
      case 1:
        timeTypeFileds = [
          <Input key="1" required type="number" labelName="有效期天数" defaultValue={item.effective_time_day || 0} onChange={this.initLimitDes} name="effective_time_day" />
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
      durationTypeFileds = <Input type="number" labelName="项目期限时长" defaultValue={item.project_duration_time || 0} onChange={this.initLimitDes} name="project_duration_time" />;
    }
    
    return (
      <Modal title="添加红包">
        <form method="post" ref="form" onSubmit={this.props.submit}>
          <Alert msg={this.state.errorMsg} />
          <input type="hidden" name="award_type" defaultValue={this.state.type} />
          <input type="hidden" name="award_id" defaultValue={item.id} />
          <Input labelName="名称" name="name" defaultValue={item.name} />
          <Fieldset>
            <Select
              labelName="红包类型"
              name="red_type"
              defaultValue={item.red_type}
              options={this.state.redEnvelopeTypes}
              onChange={this.redTypeChange}
            />
            {typeFileds}
          </Fieldset>
          <Fieldset>
            <Select
              labelName="有效期类型"
              name="effective_time_type"
              defaultValue={item.effective_time_type}
              options={this.state.redEnvelopeTimeTypes}
              onChange={this.effectiveTimeTypeChange}
            />
            {timeTypeFileds}
          </Fieldset>
          <hr style={{ borderStyle: 'dashed' }} />
          <Input type="number" onChange={this.initLimitDes} required labelName="投资门槛" defaultValue={item.investment_threshold || 0} name="investment_threshold" placeholder="0为不限制" />
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
          <Input labelName="产品ID" name="product_id" defaultValue={item.product_id} onChange={this.initLimitDes} placeholder="多个用(,)分割,不填则不限制," />
          <Select labelName="平台限制" name="platform_type" defaultValue={item.platform_type} onChange={this.initLimitDes} options={this.state.platformTypes} />
          <Textarea labelName="限制说明" name="limit_desc" value={this.state.limitDes} />
          <hr style={{ borderStyle: 'dashed' }} />
          <Textarea labelName="站内信模板" defaultValue={item.mail || getConfig('templateTypes', this.state.type)} name="mail" />
          <Textarea labelName="短信模板" name="message" defaultValue={item.message} />
          <Submit />
        </form>
      </Modal>
    );
  }
}

RedEnvelopeAddModal.propTypes = {
  dispatch: PropTypes.func.isRequired,
  submit: PropTypes.func.isRequired,
  item: PropTypes.object,
}
export default connect()(RedEnvelopeAddModal);
