import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Award from '../../pages/Award';
import { Modal, Input, Submit, Select } from '../../tools';
import { getConfig } from '../../../config/omg';

// 添加邀请人奖品弹窗
class InviteAwardAddModal extends Component {
  constructor(props) {
    super(props);
    this.addAward = this.addAward.bind(this);
    this.showAward = this.showAward.bind(this);
    this.changeSelect = this.changeSelect.bind(this);
    this.state = {
      awardType: '1',
      awardId: '',
      awardHidden: true,
    };
  }
  static propTypes = {
    activityId: PropTypes.number.isRequired,
    awardRule: PropTypes.number,
    submit: PropTypes.func.isRequired,
  }
  addAward(e) {
    this.setState({
      awardHidden: true,
      awardType: e.target.dataset.type,
      awardId: e.target.dataset.id,
    });
  }
  showAward() {
    this.setState({
      awardHidden: false,
    });
  }
  changeSelect(e) {
    this.setState({
      awardType: e.target.value,
    });
  }
  render() {
    return (
      <Modal title="添加奖品" className="modal-lg">
        <form onSubmit={this.props.submit}>
          <input type="hidden" name="activity_id" value={this.props.activityId} />
          <Select onChange={this.changeSelect} name="award_type" labelName="奖品类型" options={getConfig('awardTypes')} value={this.state.awardType} />
          <Input name="award_id" labelName="奖品Id" value={this.state.awardId} />
          <div className="form-group row">
            <div className="col-sm-offset-4 col-sm-8 col-md-6">
              <a className="btn btn-info-outline" onClick={this.showAward}>选择奖品</a>
            </div>
          </div>
          <Submit value="添加" />
        </form>
        <div hidden={this.state.awardHidden}>
          <hr style={{ borderStyle: 'dashed' }} />
          <Award modal addAward={this.addAward} type={this.state.awardType} />
        </div>
      </Modal>
    );
  }
}

export default connect()(InviteAwardAddModal);
