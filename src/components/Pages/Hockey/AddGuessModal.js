import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Modal, Alert, Input, AttachmentInput, DateTimeInput, Submit,Fieldset, Select, Textarea } from '../../tools';
import { getConfig } from '../../../config/omg';


class AddGuessModal extends Component {
  constructor(props) {
    super(props);
    const hockeyTeamTypes = getConfig('hockeyTeamTypes');
    this.state = {
       hockeyTeamTypes,
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
            第一场对阵：
              <table>
                  <tr>
                      <td>
                  <Select
                      labelName="主队"
                      name="first_master"
                      defaultValue={item.first_master}
                      options={this.state.hockeyTeamTypes}
                  />
                      </td>
                      <td>
                  <Select
                      labelName="客队"
                      name="first_visiting"
                      defaultValue={item.first_visiting}
                      options={this.state.hockeyTeamTypes}
                  />
                      </td>
                  </tr>
              </table>
              第二场对阵：
              <Fieldset>
                  <Select
                      labelName="主队"
                      name="second_master"
                      defaultValue={item.second_master}
                      options={this.state.hockeyTeamTypes}
                  />
                  <Select
                      labelName="客队"
                      name="second_visiting"
                      defaultValue={item.second_visiting}
                      options={this.state.hockeyTeamTypes}
                  />
              </Fieldset>
              第三场对阵：
              <Fieldset>
                  <Select
                      labelName="主队"
                      name="third_master"
                      defaultValue={item.third_master}
                      options={this.state.hockeyTeamTypes}
                  />
                  <Select
                      labelName="客队"
                      name="third_visiting"
                      defaultValue={item.third_visiting}
                      options={this.state.hockeyTeamTypes}
                  />
              </Fieldset>
            <Submit />
          </form>
        </Modal>
    );
  }
}
export default connect()(AddGuessModal);
