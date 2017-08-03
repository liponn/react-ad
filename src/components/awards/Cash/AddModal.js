import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import { getConfig } from '../../../config/omg';
import { Modal, Input, Submit, Select, DateTimeInput, Alert, Fieldset, Textarea } from '../../tools';

class AddModal extends Component {
  constructor(props) {
    super(props);
    this.timeTypeChange = this.timeTypeChange.bind(this);
    const types = getConfig('interestTypes');
    const timeTypes = getConfig('interestTimeTypes');
    const platformTypes = getConfig('platformTypes');
    const item = props.item || {};
    this.state = {
      errorMsg: '',
      awardType: 7,
      type: 7,
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
    return (
      <Modal title={this.props.update ? "编辑现金": "添加现金"}>
        <form method="post" onSubmit={this.props.submit}>
          <Alert msg={this.state.errorMsg} />
          <input type="hidden" name="award_type" value={this.state.awardType} />
          <input type="hidden" name="award_id" defaultValue={item.id} />
          <Input labelName="名称" name="name" defaultValue={item.name} />
          <Input labelName="金额" type="text" name="money" defaultValue={item.money} />
          <Input labelName="交易类型" type="text" name="type" defaultValue={item.type} />
          <hr style={{ borderStyle: 'dashed' }} />
          <Textarea labelName="站内信模板" defaultValue={item.mail || getConfig('templateTypes', this.state.type)} name="mail" />
          <Textarea labelName="短信模板" name="message" defaultValue={item.message} />
          <Submit />
        </form>
      </Modal>
    );
  }
}

AddModal.propTypes = {
  dispatch: PropTypes.func.isRequired,
  submit: PropTypes.func.isRequired,
  item: PropTypes.object,
}

export default connect()(AddModal);
