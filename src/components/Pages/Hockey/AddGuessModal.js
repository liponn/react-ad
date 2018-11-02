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
    this.state = {
       hockeyTeamTypes,
       examineTypes,
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
        <Modal title="添加">
          <form method="post" ref="form" onSubmit={this.props.submit}>
            <Alert msg={this.state.errorMsg} />
            <input type="hidden" name="id" defaultValue={item.id} />
            {item.id > 0 &&
                <label>第一场对阵</label>
            }
            <DateTimeInput labelName="比赛日程" name="match_date" defaultValue={this.props.item.match_date} />
            第一场对阵：
              <Fieldset >
                  <Select
                      labelName="主队"
                      name="first_master"
                      defaultValue={item.first_master}
                      options={this.state.hockeyTeamTypes}
                  />
                  <Select
                      labelName="客队"
                      name="first_visiting"
                      defaultValue={item.first_visiting}
                      options={this.state.hockeyTeamTypes}
                      hidden={item.id > 0}
                  />
              </Fieldset>
              第二场对阵：
              <Fieldset>
                  <Select
                      labelName="主队"
                      name="second_master"
                      defaultValue={item.second_master}
                      options={this.state.hockeyTeamTypes}
                      hidden={item.id > 0}
                  />
                  <Select
                      labelName="客队"
                      name="second_visiting"
                      defaultValue={item.second_visiting}
                      options={this.state.hockeyTeamTypes}
                      hidden={item.id > 0}
                  />
              </Fieldset>
              第三场对阵：
              <Fieldset>
                  <Select
                      labelName="主队"
                      name="third_master"
                      defaultValue={item.third_master}
                      options={this.state.hockeyTeamTypes}
                      hidden={item.id > 0}
                  />
                  <Select
                      labelName="客队"
                      name="third_visiting"
                      defaultValue={item.third_visiting}
                      options={this.state.hockeyTeamTypes}
                      hidden={item.id > 0}
                  />
              </Fieldset>
              是否是冠军场：
              <Fieldset>
                  <Select
                      labelName="第三场是否是冠军场"
                      name="champion_status"
                      defaultValue={item.third_master}
                      options={this.state.examineTypes}
                      hidden={item.id > 0}
                  />
              </Fieldset>
            <Submit />
          </form>
        </Modal>
    );
  }
}
export default connect()(AddGuessModal);
