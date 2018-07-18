import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Modal, Alert, Input, Checkbox, AttachmentInput, Submit, Editor, Select } from '../../tools';
import { getConfig } from '../../../config/omg';
import AddQuestion from '../Category/AddQuestion';


class AddModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      awardHidden:true,
      qids:[],
      questionType: 0,
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

  showAward() {
    this.setState({
      awardHidden: false,
    });
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
  
  handleChange(e) {
    const value = $(e.target).val().toString();
    const qids = value === '' ? [] : value.split(/,+/);
    this.setState({
      qids,
    });
  }
  componentDidMount() {
    const { item } = this.props;
    if (item.relative) {
      const qids =  JSON.parse(item.relative)
      this.setState({qids: qids, questionType: item.type});
    } else {
      this.setState({questionType: item.type});
    }
  }

  handleChangeSelect(e) {
    this.setState({
      questionType: e.target.value,
    });
  }
  render() {
    const qids_str = this.state.qids.join(',')
    // <AttachmentInput labelName="icon" position={`banner_${this.props.item.icon}`} name="icon" defaultValue={this.props.item.icon || ''} />
    return (
      <Modal className="modal-lg" title={this.props.title || "添加"}>
        <form id="add-article-form" method="post" onSubmit={this.props.submit}>
          <Alert msg={this.props.errorMsg} />
          <input type="hidden" name="id" value={this.props.item.id} />
          <Input labelName="标题" name="title" defaultValue={this.props.item.title} />
          <Editor name="content" defaultValue={this.props.item.content} />
          <Select onChange={this.handleChangeSelect.bind(this)} name="type" labelName="类型" options={getConfig('questionType')} value={this.state.questionType} />
          <div className="form-group row">
          <label className="col-sm-4 form-control-label text-xs-right">关联问题Id:</label>
          <div className="col-sm-6">
            <textarea
              name="relative"
              value={qids_str}
              onChange={this.handleChange.bind(this)}
              className="form-control"
            ></textarea>
          </div>
        </div>
          <div className="form-group row">
            <div className="col-sm-offset-4 col-sm-8 col-md-6">
              <a className="btn btn-info-outline" onClick={this.showAward.bind(this)}>选择关联问题</a>
            </div>
          </div>
          <Submit />
        </form>
        <div hidden={this.state.awardHidden}>
          <hr style={{ borderStyle: 'dashed' }} />
          <AddQuestion handleAdd={this.handleAdd.bind(this)} handleDel={this.handleDel.bind(this)} qids={qids_str}/>
        </div>
      </Modal>
    );
  }
}
export default connect()(AddModal);
