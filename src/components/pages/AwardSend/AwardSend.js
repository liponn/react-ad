import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import { showModal, hideModal } from '../../../actions/modal';
import { Modal, Card, Input, Submit, Alert, Success, Select } from '../../tools';
import { AWARD_ADD_TO_USER } from '../../../constants';
import { fetchAction } from '../../../actions/omg';
import Award from '../Award';
import { getConfig } from '../../../config/omg';

class AwardSend extends Component {
  constructor(props) {
    super(props);
    this.addAward = this.addAward.bind(this);
    this.selectAward = this.selectAward.bind(this);
    this.changeSelect = this.changeSelect.bind(this);
    this.submit = this.submit.bind(this);
    this.state = {
      awardType: '1',
      awardId: '',
    };
  }
  addAward(e) {
    const awardType = e.target.dataset.type;
    const awardId = e.target.dataset.id;
    this.setState({
      awardType,
      awardId,
    });
    this.props.dispatch(hideModal());
  }
  selectAward() {
    const awardView = (
      <Modal title="添加奖品" className="modal-lg">
        <Award modal addAward={this.addAward} type={this.state.awardType} />
      </Modal>
    );
    this.props.dispatch(showModal(awardView));
  }
  submit(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    this.props.dispatch(fetchAction({
      type: AWARD_ADD_TO_USER,
      method: 'POST',
      formData,
    })).then(json => {
      if (json.error_code === 0){
        const date = new Date()
        const time = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
        if (!json.data.status) {
          this.setState({
            successMsg: '',
            errorMsg: `"${json.data.award_name}"于${time}发送${json.data.status ? '成功' : '失败'}!`,
          });
          return;
        }
        this.setState({
          errorMsg: '',
          successMsg: `"${json.data.award_name}"于${time}发送${json.data.status ? '成功' : '失败'}!`,
        });
      } else {
          this.setState({
            successMsg: '',
            errorMsg: json.data.error_msg,
          });
      }
    });
  }
  changeSelect(e) {
    this.setState({
      awardType: e.target.value,
    });
  }
  render() {
    return (
      <div>
        <Card title="手动发放奖品">
          <div className="p-t-1 p-x-1">
            <Alert msg={this.state.errorMsg} />
            <Success msg={this.state.successMsg} />
          </div>
          <form className="m-t-1" onSubmit={this.submit}>
            <Input name="userId" labelName="用户ID" />
            <Select onChange={this.changeSelect} name="awardType" labelName="奖品类型" options={getConfig('awardTypes')} value={this.state.awardType} />
            <Input name="awardId" labelName="奖品Id" value={this.state.awardId} />
            <div className="form-group row">
              <div className="col-sm-offset-4 col-sm-8 col-md-6">
                <a className="btn btn-info-outline" onClick={this.selectAward}>选择奖品</a>
              </div>
            </div>
            <Input name="sourceName" labelName="奖品来源" value="手动添加" />
            <Submit value="发送" />
          </form>
        </Card>
      </div>
    );
  }
}

AwardSend.propTypes = {
  dispatch: PropTypes.func.isRequired,
}

AwardSend.defaultProps = {}

export default connect()(AwardSend);
