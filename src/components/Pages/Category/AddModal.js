import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import { Modal, Alert, Input, Checkbox, AttachmentInput, DateTimeInput, Submit, Select, Textarea } from '../../tools';
import { getConfig } from '../../../config/omg';
import AddQuestion from './AddQuestion';


class AddModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      qids: [],
      awardHidden:true
    };
  }
  static propTypes = {
    submit: PropTypes.func.isRequired,
    errorMsg: PropTypes.string,
    item: PropTypes.object,
  }
  static defaultProps = {
    item: {},
  }

  handleAdd(e) {
    const id = $(e.target).data('id').toString();
    const { qids } = this.state;
    if(!qids.find((value) => (value == id))) {
      qids.push(id);
    }
    this.setState({
      qids,
    });
  }

  handleDel(e) {
    const id = $(e.target).data('id').toString();
    const { qids } = this.state;
    const index = qids.findIndex((value) => (value == id))
    if (index > -1) {
      qids.splice(index, 1);
    }
    this.setState({
      qids,
    });
  }
  // 人工修改渠道规则
  handleChange(e) {
    const value = $(e.target).val().toString();
    const qids = value === '' ? [] : value.split(/,+/);
    this.setState({
      qids,
    });
  }

   //问题Id 列表显示
  showAward() {
    this.setState({
      awardHidden: false,
    });
  }

  componentDidMount() {
    const { item } = this.props;
    if (item.questions) {
      const qids = []
      item.questions.map(item => qids.push(item.q_id))
      this.setState({qids: qids});
    }
  }

  render() {
    const qids_str = this.state.qids.join(',')
    return (
      <Modal title={this.props.title || "添加"} className="modal-lg">
        <form method="post" onSubmit={this.props.submit}>
          <Alert msg={this.props.errorMsg} />
          <input type="hidden" name="id" value={this.props.item.id} />
          <input type="hidden" name="icon" value={this.props.item.icon} />
          <Input key="share_name" name="title" labelName="名称" defaultValue={this.props.item.title} />
          <AttachmentInput labelName="图标" position={`banner_${this.props.item.icon}`} name="icon" defaultValue={this.props.item.icon || ''} />
          <div className="form-group row">
          <label className="col-sm-4 form-control-label text-xs-right">问题Id:</label>
          <div className="col-sm-6">
            <textarea
              name="qids"
              value={qids_str}
              onChange={this.handleChange.bind(this)}
              className="form-control"
            ></textarea>
          </div>
        </div>
          <div className="form-group row">
            <div className="col-sm-offset-4 col-sm-8 col-md-6">
              <a className="btn btn-info-outline" onClick={this.showAward.bind(this)}>选择问题</a>
            </div>
          </div>
          <Submit />
        </form>
        <div hidden={this.state.awardHidden}>
          <hr style={{ borderStyle: 'dashed' }} />
          <AddQuestion handleAdd={this.handleAdd.bind(this)} handleDel={this.handleDel.bind(this)} qids={qids_str} />
        </div>
      </Modal>
    );
  }
}
export default connect()(AddModal);
