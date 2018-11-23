import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Modal, Alert, Input, AttachmentInput, DateTimeInput, Submit,Fieldset, Select, Textarea, Radio} from '../../tools';
import { getConfig } from '../../../config/omg';


class AddGuessModal extends Component {
  constructor(props) {
    super(props);
    const hockeyTeamTypes = getConfig('hockeyTeamTypes');
    const examineTypes = getConfig('examineTypes');
    const hockeyResultTypes = getConfig('hockeyResultTypes');
    this.state = {
       hockeyTeamTypes,
       examineTypes,
       hockeyResultTypes,
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
        <Modal title="修改">
          <form method="post" ref="form" onSubmit={this.props.submit}>
            <Alert msg={this.state.errorMsg} />
            <Input type="hidden" name="id" defaultValue={item.id} />
              <div align="center"><strong><label>第一场对阵：</label>&nbsp;&nbsp;&nbsp;&nbsp;<label><font color="red">{item.first_master}--{item.first_visiting}</font></label></strong></div>
              <Input key="first_master_score" name="first_master_score" labelName="主队比分" defaultValue={item.first_master_score} />
              <Input key="first_visiting_score" name="first_visiting_score" labelName="客队比分" defaultValue={item.first_visiting_score} />
              <Select
                  labelName="第一场结果"
                  name="first_result"
                  defaultValue={item.first_result}
                  options={this.state.hockeyResultTypes}
              />
              <div align="center"><strong><label>第二场对阵：</label>&nbsp;&nbsp;&nbsp;&nbsp;<label><font color="red">{item.second_master}--{item.second_visiting}</font></label></strong></div>
              <Input key="second_master_score" name="second_master_score" labelName="主队比分" defaultValue={item.second_master_score} />
              <Input key="second_visiting_score" name="second_visiting_score" labelName="客队比分" defaultValue={item.second_visiting_score} />
              <Select
                  labelName="第二场结果"
                  name="second_result"
                  defaultValue={item.second_result}
                  options={this.state.hockeyResultTypes}
              />
              <div align="center"><strong><label>第三场对阵：</label>&nbsp;&nbsp;&nbsp;&nbsp;<label><font color="red">{item.third_master}--{item.third_visiting}</font></label></strong></div>
              <Input key="third_master_score" name="third_master_score" labelName="主队比分" defaultValue={item.third_master_score} />
              <Input key="third_visiting_score" name="third_visiting_score" labelName="客队比分" defaultValue={item.third_visiting_score} />
              <Select
                  labelName="第三场结果"
                  name="third_result"
                  defaultValue={item.third_result}
                  options={this.state.hockeyResultTypes}
              />
            <Submit />
          </form>
        </Modal>
    );
  }
}
export default connect()(AddGuessModal);
