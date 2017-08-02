import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';

import { commonFetch } from '../../../actions/omg';
import { hideModal } from '../../../actions/modal';

import Alert from '../../tools/Alert';
import Input from '../../tools/Input';
import ModalHeader from '../../tools/ModalHeader';

import { BBS_GROUP_TASK_PUT } from '../../../constants'

class TaskGroupUpdateModal extends Component {
  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
  }
  onSubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    this.props.dispatch(commonFetch(BBS_GROUP_TASK_PUT, 'POST', formData))
      .then(({ error_code }) => {
        if (error_code === 0) {
          this.props.dispatch(hideModal());
          this.props.callback();
        } else {
          this.setState({
            errorMsg: json.data.error_msg,
          });
        }
      });
  }

  render() {
      const item = this.props.item || {};
    return (
      <div className="modal-dialog">
        <div className="modal-content">
          <ModalHeader title="编辑任务" />
          <div className="modal-body">
            <form
              id="add-activity-form"
              method="post"
              onSubmit={this.onSubmit}
            >
              <Alert msg={this.props.errorMsg} />
              <Input labelName="任务名称" name="name" defaultValue={item.name} />
              <Input labelName="任务别名" name="alias_name" defaultValue={item.alias_name} />
                <input type="hidden" name="id" value={item.id} />
              <div className="form-group row">
                <label className="col-sm-4 form-control-label text-xs-right">TIP:</label>
                <div className="col-sm-8 col-md-6">
                  <textarea name="tip" className="form-control" defaultValue={item.tip}></textarea>
                </div>
              </div>
              <div className="form-group row">
                <div className="col-sm-offset-4 col-sm-8">
                  <button type="submit" className="btn btn-primary" >保存</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
TaskGroupUpdateModal.propTypes = {
  dispatch: PropTypes.func.isRequired,
  callback: PropTypes.func.isRequired,
  errorMsg:PropTypes.string,
}

export default connect()(TaskGroupUpdateModal);
