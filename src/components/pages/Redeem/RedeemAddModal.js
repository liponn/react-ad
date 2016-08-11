import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import { Modal, Alert, Input, Submit, DateTimeInput } from '../../tools';
import { fetchAction } from '../../../actions/omg';
import { REDEEM_LIST } from '../../../constants';
import Award from '../../pages/Award';

// 添加兑换码弹窗
class RedeemAddModal extends Component {
  constructor(props) {
    super(props);
    this.addAward = this.addAward.bind(this);
    this.showAward = this.showAward.bind(this);
    this.state = {
      awardType: '',
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
  render() {
    return (
      <Modal title="添加兑换码" className="modal-lg">
        <Alert msg={this.props.addErrorMsg} />
        <form onSubmit={this.props.submit}>
          <Input name="name" labelName="兑换码名称" />
          <Input name="award_type" labelName="奖品类型Id" value={this.state.awardType} />
          <Input name="award_id" labelName="奖品Id" value={this.state.awardId} />
          <div className="form-group row">
            <div className="col-sm-offset-4 col-sm-8 col-md-6">
              <a className="btn btn-info-outline" onClick={this.showAward}>选择奖品</a>
            </div>
          </div>
          <Input name="number" labelName="生成数量" />
          <DateTimeInput name="expire_time" labelName="过期时间" />
          <Submit value="添加" />
        </form>
        <div hidden={this.state.awardHidden}>
          <hr style={{ borderStyle: 'dashed' }} />
          <Award modal addAward={this.addAward} awardType="1" />
        </div>
      </Modal>
    );
  }
}
export default connect(state => {
  const { omg } =  state;
  return {};
})(RedeemAddModal);
