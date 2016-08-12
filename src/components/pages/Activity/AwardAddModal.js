import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import Award from '../../pages/Award';
import { Modal, Input, Submit } from '../../tools';

class AwardAddModal extends Component {
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
    item: PropTypes.object.isRequired,
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
    const item = this.props.item;
    return (
      <Modal title="添加奖品" className="modal-lg">
        <form onSubmit={this.props.submit}>
          <input type="hidden" name="activity_id" value={item.id} />
          <Input name="award_type" labelName="奖品类型Id" value={this.state.awardType} />
          <Input name="award_id" labelName="奖品Id" value={this.state.awardId} />
          <div className="form-group row">
            <div className="col-sm-offset-4 col-sm-8 col-md-6">
              <a className="btn btn-info-outline" onClick={this.showAward}>选择奖品</a>
            </div>
          </div>
          <Input hidden={item.award_rule !== 2} name="priority" labelName="奖品权重" type="number" defaultValue="0" />
          <Submit value="添加" />
        </form>
        <div hidden={this.state.awardHidden}>
          <hr style={{ borderStyle: 'dashed' }} />
          <Award modal addAward={this.addAward} />
        </div>
      </Modal>
    );
  }
}

export default connect()(AwardAddModal);