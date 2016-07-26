import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import { showModal, hideModal } from '../../../actions/modal';
import { Modal, Card, Input, Submit, Alert } from '../../tools';
import { AWARD_ADD_TO_USER } from '../../../constants';
import { fetchAction } from '../../../actions/omg';
import Award from '../Award';

class AwardSend extends Component {
  constructor(props) {
    super(props);
    this.addAward = this.addAward.bind(this);
    this.selectAward = this.selectAward.bind(this);
    this.submit = this.submit.bind(this);
    this.state = {
      awardType: '',
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
      <Modal title="添加奖品">
        <Award modal addAward={this.addAward} awardType="1" />
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
        if (!json.data) {
          this.setState({
            errorMsg: '添加奖品失败',
          });
        }
      }
    });
  }
  render() {
    return (
      <div>
        <Card title="手动添加奖品">
          <form className="m-t-1" onSubmit={this.submit}>
            <Alert msg={this.state.errorMsg} />
            <Input name="userId" labelName="用户ID" />
            <Input name="awardType" labelName="奖品类型Id" value={this.state.awardType} />
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
