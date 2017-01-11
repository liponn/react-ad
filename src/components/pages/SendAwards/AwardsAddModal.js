import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import { Input, Alert, Submit, Modal, Select, Success, Textarea, Checkbox } from '../../tools';
import { BATCH_AWARD } from '../../../constants';
import { getConfig } from '../../../config/omg';
import { fetchAction } from '../../../actions/omg';
import { showModal, hideModal } from '../../../actions/modal';
import Award from '../Award';

class AwardsAddModal extends Component {
  constructor(props) {
    super(props);
    this.addAward = this.addAward.bind(this);
    this.showAward = this.showAward.bind(this);
    this.selectAward = this.selectAward.bind(this);
    this.changeSelect = this.changeSelect.bind(this);
    this.state = {
      awardType: '1',
      awardId: '',
      awardHidden: true,
    };
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
  selectAward() {
    const awardView = (
      <Modal title="添加奖品" className="modal-lg">
        <Award modal addAward={this.addAward} type={this.state.awardType} />
      </Modal>
    );
    this.props.dispatch(showModal(awardView));
  }

  changeSelect(e) {
    this.setState({
      awardType: e.target.value,
    });
  }
  render() {
    return (
      <Modal title={this.props.update ? '' : '批量发送奖品'} className="modal-lg">
        <div className="p-t-1 p-x-1">
          <Alert msg={this.state.errorMsg} />
          <Success msg={this.state.successMsg} />
        </div>
        <form className="m-t-1" onSubmit={this.props.submit}>
          <Textarea name="uids" labelName="手机号/ID" />
          <Select onChange={this.changeSelect} name="award_type" labelName="奖品类型" options={getConfig('awardTypes')} value={this.state.awardType} />
          <Input name="award_id" labelName="奖品Id" value={this.state.awardId} />
          <div className="form-group row">
            <div className="col-sm-offset-4 col-sm-8 col-md-6">
              <a className="btn btn-info-outline" onClick={this.showAward}>选择奖品</a>
            </div>
          </div>
          <Input name="source_name" labelName="奖品来源" value="手动添加" />
          <Checkbox labelName="其它费用" name="is_other" />
          <Submit value="发送" />
        </form>
        <div hidden={this.state.awardHidden}>
          <hr style={{ borderStyle: 'dashed' }} />
          <Award modal addAward={this.addAward} type={this.state.awardType} />
        </div>
      </Modal>
    );
  }
}
AwardsAddModal.propTypes = {
  dispatch: PropTypes.func.isRequired,
  typeId: PropTypes.number.isRequired,
  submit: PropTypes.func.isRequired,
  update: PropTypes.bool,
  item: PropTypes.object,
}
AwardsAddModal.defaultProps = {
  item: {},
}
export default connect(state => {
  const { omg } = state;
  const errorMsg = omg.errorMsg[BATCH_AWARD] || '';
  return {
    errorMsg,
  };
})(AwardsAddModal);
